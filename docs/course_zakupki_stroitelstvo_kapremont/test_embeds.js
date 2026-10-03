// Exercise the shipped fallback controller without opening external services.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const script = fs.readFileSync(__dirname + '/assets/js/embeds.js', 'utf8');

function fixture(online = true) {
  const listeners = {};
  const timers = new Map();
  let nextTimer = 1;
  function element() {
    return {
      hidden: false,
      textContent: '',
      attributes: {},
      listeners: {},
      addEventListener(name, fn) { this.listeners[name] = fn; },
      setAttribute(name, value) { this.attributes[name] = value; },
      getAttribute(name) { return this.attributes[name]; },
      emit(name) { this.listeners[name]?.(); },
    };
  }
  const primary = element();
  const fallback = element();
  fallback.hidden = true;
  const frame = element();
  frame.attributes.src = 'https://learningapps.org/watch?v=test';
  primary.querySelector = () => frame;
  const recovery = element();
  const block = element();
  block.open = true;
  block.querySelector = selector => ({
    '[data-embed-primary]': primary,
    '[data-embed-fallback]': fallback,
    '[data-embed-recovery]': recovery,
  })[selector];
  const browserWindow = {
    setTimeout(fn, ms) { assert.equal(ms, 15000); const id = nextTimer++; timers.set(id, fn); return id; },
    clearTimeout(id) { timers.delete(id); },
    addEventListener(name, fn) { listeners[name] = fn; },
  };
  const navigator = { onLine: online };
  vm.runInNewContext(script, {
    document: { querySelectorAll: () => [block] },
    window: browserWindow, navigator,
  });
  return { primary, fallback, frame, recovery, block, timers, navigator, listeners };
}

const success = fixture();
assert.equal(success.timers.size, 1);
assert.equal(success.fallback.hidden, true);
success.frame.emit('load');
assert.equal(success.fallback.hidden, true);
assert.equal(success.primary.hidden, false);
assert.equal(success.timers.size, 0);

const error = fixture();
error.frame.emit('error');
assert.equal(error.primary.hidden, true);
assert.equal(error.fallback.hidden, false);
assert.equal(error.recovery.attributes['aria-expanded'], 'true');

const offline = fixture(false);
assert.equal(offline.primary.hidden, true);
assert.equal(offline.fallback.hidden, false);

const timeout = fixture();
[...timeout.timers.values()][0]();
assert.equal(timeout.fallback.hidden, false);

const manual = fixture();
manual.recovery.emit('click');
assert.equal(manual.fallback.hidden, false);
manual.navigator.onLine = true;
manual.recovery.emit('click');
assert.equal(manual.primary.hidden, false);
assert.equal(manual.fallback.hidden, true);
assert.equal(manual.frame.src, manual.frame.attributes.src);
assert.equal(manual.timers.size, 1);

const disconnected = fixture();
disconnected.navigator.onLine = false;
disconnected.listeners.offline();
assert.equal(disconnected.fallback.hidden, false);
disconnected.recovery.emit('click');
assert.equal(disconnected.fallback.hidden, false);

console.log('Embed states passed: success, error, offline, timeout, manual fallback, retry');
