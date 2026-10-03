(() => {
  const hosts = new Set([
    'learningapps.org',
    'view.genially.com',
    'www.jigsawplanet.com'
  ]);
  const blocks = document.querySelectorAll('.online-embed[data-embed-url]');
  const states = new WeakMap();

  function reset(block) {
    const state = states.get(block);
    if (state) {
      state.controller?.abort();
      clearTimeout(state.timer);
    }
    const next = { generation: (state?.generation || 0) + 1 };
    states.set(block, next);
    const frame = block.querySelector('.embed-frame');
    frame.replaceChildren();
    frame.hidden = true;
    block.querySelector('.embed-fallback').hidden = false;
    return next;
  }

  async function load(block) {
    const state = reset(block);
    if (navigator.onLine === false) return;

    let url;
    try {
      url = new URL(block.dataset.embedUrl);
      if (url.protocol !== 'https:' || !hosts.has(url.hostname)) return;
    } catch {
      return;
    }

    const controller = new AbortController();
    state.controller = controller;
    state.timer = setTimeout(() => controller.abort(), 10000);
    try {
      // An opaque response is enough to confirm that the address is reachable.
      await fetch(url.href, { mode: 'no-cors', cache: 'no-store', signal: controller.signal });
    } catch {
      if (states.get(block) === state) reset(block);
      return;
    } finally {
      clearTimeout(state.timer);
    }
    if (states.get(block) !== state || navigator.onLine === false) return;

    const frame = block.querySelector('.embed-frame');
    const iframe = document.createElement('iframe');
    iframe.title = 'Встроенный учебный материал';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.style.visibility = 'hidden';
    iframe.addEventListener('load', () => {
      if (states.get(block) !== state) return;
      clearTimeout(state.timer);
      iframe.style.visibility = 'visible';
      block.querySelector('.embed-fallback').hidden = true;
    }, { once: true });
    iframe.addEventListener('error', () => {
      if (states.get(block) === state) reset(block);
    }, { once: true });
    frame.hidden = false;
    frame.append(iframe);
    state.timer = setTimeout(() => {
      if (states.get(block) === state && iframe.style.visibility === 'hidden') reset(block);
    }, 15000);
    iframe.src = url.href;
  }

  blocks.forEach(load);
  window.addEventListener('online', () => blocks.forEach(load));
  window.addEventListener('offline', () => blocks.forEach(reset));
})();
