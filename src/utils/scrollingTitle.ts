const TITLE = '♡ bouquetsbysha ♡ ';
const INTERVAL_MS = 280;

export function startScrollingTitle() {
  let offset = 0;
  document.title = TITLE;

  const tick = () => {
    offset = (offset + 1) % TITLE.length;
    document.title = TITLE.slice(offset) + TITLE.slice(0, offset);
  };

  const id = window.setInterval(tick, INTERVAL_MS);

  return () => {
    window.clearInterval(id);
    document.title = 'bouquetsbysha';
  };
}
