/* Show the source material first; expose the saved static view on failure. */
document.querySelectorAll('.embedded').forEach((block) => {
  const primary = block.querySelector('[data-embed-primary]');
  const fallback = block.querySelector('[data-embed-fallback]');
  const frame = primary.querySelector('iframe');
  const recovery = block.querySelector('[data-embed-recovery]');
  const external = block.dataset.embedType === 'external';
  let timer;
  let loaded = false;

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

  function watch() {
    clearTimer();
    if (!block.open || loaded) return;
    if (external && navigator.onLine === false) {
      showFallback();
      return;
    }
    timer = window.setTimeout(showFallback, external ? 15000 : 8000);
  }

  frame.addEventListener('load', () => {
    loaded = true;
    clearTimer();
    if (fallback.hidden) showPrimary();
  });
  frame.addEventListener('error', showFallback);
  block.addEventListener('toggle', watch);
  if (external) window.addEventListener('offline', showFallback);

  recovery.addEventListener('click', () => {
    if (fallback.hidden) {
      showFallback();
    } else {
      loaded = false;
      showPrimary();
      watch();
      frame.src = frame.getAttribute('src');
    }
  });
  if (block.open) watch();
});
