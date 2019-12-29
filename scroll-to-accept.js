function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const button = document.querySelector('.accept');

  if (!terms) {
    return; // exit function since terms doesn't exist
  }

  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) { // 1 means it's completely visible on the page
      button.disabled = false;

      // stop observing since legal has been read
      ob.unobserve(terms.lastElementChild);
    }
  }

  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();