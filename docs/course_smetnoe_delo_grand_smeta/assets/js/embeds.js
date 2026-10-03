/* Show the embedded material first; reveal the saved fallback only on failure. */
document.querySelectorAll('.embedded').forEach((block) => {
  const primary = block.querySelector('[data-embed-primary]');
  const fallback = block.querySelector('[data-embed-fallback]');
  const frame = primary.querySelector('iframe, object');
  const recovery = block.querySelector('[data-embed-recovery]');
  const external = block.dataset.embedType === 'external';
  let timer;
  let loaded = false;
  let failed = false;
  let manualFallback = false;

  function clearTimer() { if (timer) clearTimeout(timer); timer = undefined; }
  function showPrimary() {
    primary.hidden = false;
    fallback.hidden = true;
    recovery.textContent = 'Материал не открылся?';
    recovery.setAttribute('aria-expanded', 'false');
  }
  function showFallback() {
    clearTimer();
    primary.hidden = true;
    fallback.hidden = false;
    recovery.textContent = 'Повторить загрузку';
    recovery.setAttribute('aria-expanded', 'true');
  }
  function watch() {
    clearTimer();
    if (!block.open || loaded || failed || manualFallback) return;
    if (external && navigator.onLine === false) { showFallback(); return; }
    if (external) timer = setTimeout(showFallback, 15000);
  }
  if (frame) {
    frame.addEventListener('load', () => {
      if (failed || manualFallback || (external && navigator.onLine === false)) return;
      loaded = true; clearTimer(); showPrimary();
    });
    frame.addEventListener('error', () => { failed = true; showFallback(); });
  } else { showFallback(); }
  block.addEventListener('toggle', watch);
  if (external) window.addEventListener('offline', showFallback);
  recovery.addEventListener('click', () => {
    if (fallback.hidden) { manualFallback = true; showFallback(); return; }
    if (external && navigator.onLine === false) return;
    manualFallback = false; loaded = false; failed = false;
    showPrimary(); watch();
    if (frame) {
      const attr = frame.tagName === 'OBJECT' ? 'data' : 'src';
      frame.setAttribute(attr, frame.getAttribute(attr));
    }
  });
  if (block.open) watch();
});
