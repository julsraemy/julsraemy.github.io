/* Show/hide toggle for each CV block (.cv-block), one for the whole Skills section, plus "Collapse all / Expand all".
   Blocks start open; without JavaScript they simply stay open. */
(function () {
  var blocks = document.querySelectorAll(".cv-block");
  var toggles = [];

  blocks.forEach(function (block, i) {
    var children = Array.prototype.slice.call(block.children);
    var date = block.querySelector(":scope > .cv-block__date");
    /* Header: the date pill (if any) and the first line after it */
    var start = date ? children.indexOf(date) + 2 : 1;
    var rest = children.slice(start);
    if (!rest.length) return;

    var body = document.createElement("div");
    body.className = "cv-block__body";
    body.id = "cv-block-" + i;
    var inner = document.createElement("div");
    inner.className = "cv-block__inner";
    rest.forEach(function (el) { inner.appendChild(el); });
    body.appendChild(inner);
    block.appendChild(body);

    var button = document.createElement("button");
    button.type = "button";
    button.className = "cv-block__toggle";
    button.setAttribute("aria-controls", body.id);
    var title = children[start - 1] ? children[start - 1].textContent.trim() : "";

    function set(open) {
      block.classList.toggle("is-collapsed", !open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.setAttribute("aria-label", (open ? "Hide details: " : "Show details: ") + title);
      inner.inert = !open;
    }
    button.addEventListener("click", function () {
      set(block.classList.contains("is-collapsed"));
    });
    block.classList.add("has-toggle");
    block.insertBefore(button, block.firstChild);
    set(true);
    toggles.push(set);
  });

  /* Skills: one button for the whole section; closed shows only the category names */
  var grid = document.querySelector(".skills-grid");
  if (grid) {
    var sbtn = document.createElement("button");
    sbtn.type = "button";
    sbtn.className = "skills-toggle";
    sbtn.setAttribute("aria-controls", grid.id = grid.id || "skills-grid");
    var setSkills = function (open) {
      grid.classList.toggle("is-collapsed", !open);
      sbtn.setAttribute("aria-expanded", open ? "true" : "false");
      sbtn.textContent = open ? "Hide skills" : "Show skills";
    };
    sbtn.addEventListener("click", function () { setSkills(grid.classList.contains("is-collapsed")); });
    grid.insertAdjacentElement("beforebegin", sbtn);
    setSkills(true);
    toggles.push(setSkills);
  }

  /* Collapse all / Expand all, placed under the "Curriculum vitae" heading */
  var heading = document.getElementById("curriculum-vitae");
  if (heading && toggles.length) {
    var bar = document.createElement("p");
    bar.className = "cv-toolbar";
    [["Collapse all", false], ["Expand all", true]].forEach(function (pair) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = pair[0];
      b.addEventListener("click", function () { toggles.forEach(function (set) { set(pair[1]); }); });
      bar.appendChild(b);
    });
    heading.insertAdjacentElement("afterend", bar);
  }
})();
