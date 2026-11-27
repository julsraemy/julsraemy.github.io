/* Reveal cards and CV entries as they scroll into view.
   Content stays visible without JavaScript or with reduced motion,
   because the hidden state only applies once <html> has .js-reveal. */
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var selectors = [
    ".home-hero",
    ".about-now__card",
    ".community-card",
    ".home-post",
    ".about-timeline__item",
    ".project-tile",
    ".project-card",
    ".pub-list > .pub",
    ".about .page__content > p",
    ".cv .page__content > h2",
    ".cv .page__content > h3",
    ".cv .page__content > p",
    ".cv .page__content > ul",
    ".cv .page__content > .cv-subentries",
    ".cv-block",
    ".cv-more",
    ".skills-group"
  ];
  var items = document.querySelectorAll(selectors.join(","));
  if (!items.length) return;

  document.documentElement.classList.add("js-reveal");
  items.forEach(function (el) { el.classList.add("reveal"); });

  /* Lighter effect on small screens: shorter stagger and cleanup */
  var small = window.matchMedia("(max-width: 700px)").matches;
  var step = small ? 40 : 90;
  var duration = small ? 550 : 900;

  var observer = new IntersectionObserver(function (entries) {
    var batch = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      /* Items entering together appear one after another */
      var el = entry.target;
      var delay = Math.min(batch, small ? 3 : 6) * step;
      el.style.setProperty("--reveal-delay", delay + "ms");
      el.classList.add("is-visible");
      /* Hand back to the element's own styles (e.g. hover lift) once shown */
      setTimeout(function () {
        el.classList.remove("reveal", "is-visible");
        el.style.removeProperty("--reveal-delay");
      }, delay + duration);
      observer.unobserve(el);
      batch++;
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  items.forEach(function (el) { observer.observe(el); });
})();
