// Open links pointing outside the site in a new tab
(function () {
  var links = document.querySelectorAll("a[href]");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (!/^https?:$/.test(link.protocol) || link.hostname === location.hostname) {
      continue;
    }
    link.target = "_blank";
    link.relList.add("noopener", "noreferrer");
  }
})();
