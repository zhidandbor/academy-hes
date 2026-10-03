/* Keep the original attachment visible; reveal the saved copy only on failure. */
document.querySelectorAll('.embedded[data-embed-type="external"]').forEach((block) => {
  const primary = block.querySelector('[data-embed-primary]');
  const fallback = block.querySelector('[data-embed-fallback]');
  const frame = primary.querySelector('iframe');
  const recovery = block.querySelector('[data-embed-recovery]');
  let timer;
  let loaded = false;
  let failed = false;
  let manualFallback = false;

  function clearTimer() {
    if (timer) window.clearTimeout(timer);
    timer = undefined;
  }

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

  function watchLoading() {
    clearTimer();
    if (!block.open || loaded || failed || manualFallback) return;
    if (navigator.onLine === false) {
      showFallback();
      return;
    }
    timer = window.setTimeout(showFallback, 15000);
  }

  frame.addEventListener('load', () => {
    if (failed || manualFallback || navigator.onLine === false) return;
    loaded = true;
    clearTimer();
    showPrimary();
  });
  frame.addEventListener('error', () => {
    failed = true;
    showFallback();
  });
  block.addEventListener('toggle', watchLoading);
  window.addEventListener('offline', showFallback);

  recovery.addEventListener('click', () => {
    if (fallback.hidden) {
      manualFallback = true;
      showFallback();
      return;
    }
    if (navigator.onLine === false) return;
    manualFallback = false;
    loaded = false;
    failed = false;
    showPrimary();
    watchLoading();
    frame.src = frame.getAttribute('src');
  });

  if (block.open) watchLoading();
});
