document.addEventListener('DOMContentLoaded', () => {
  for (const box of document.querySelectorAll('[data-external-embed]')) {
    const frame = box.querySelector('iframe');
    if (!frame) continue;
    const unavailable = () => { box.dataset.state = 'unavailable'; };
    if (navigator.onLine === false) { unavailable(); continue; }
    const timer = setTimeout(unavailable, 12000);
    frame.addEventListener('load', () => clearTimeout(timer), { once: true });
    frame.addEventListener('error', () => { clearTimeout(timer); unavailable(); }, { once: true });
    window.addEventListener('offline', unavailable, { once: true });
  }
});
