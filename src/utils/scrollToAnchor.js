const mathSign = Math.sign || ((x) => {
  const val = +x;

  if (val === 0 || Number.isNaN(val)) return val;
  return val > 0 ? 1 : -1;
});

const scrollToAnchor = (hash, lastOffsetY) => {
  const anchor = hash && document.querySelector(hash);
  const offsetY = window.scrollY || window.pageYOffset;

  // no scroll to target, stop
  if (!anchor) return;

  const elementTop = Math.round(anchor.getBoundingClientRect().top);
  const scrollStep = Math.ceil((Math.abs(elementTop / 8))) * mathSign(elementTop);

  // if our last step was not applied, stop
  // we've either hit the top, bottom, or arrived at the element
  if (lastOffsetY === offsetY) return;

  // more scrolling to do!
  window.scrollBy(0, scrollStep);
  requestAnimationFrame(() => scrollToAnchor(hash, offsetY));
};

export default scrollToAnchor;
