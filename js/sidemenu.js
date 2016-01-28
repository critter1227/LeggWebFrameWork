! function(e, n) {
  function t(e, n) {
    for (var t = e.className.split(/\s+/), i = t.length, a = 0; i > a; a++)
      if (t[a] === n) {
        t.splice(a, 1);
        break
      }
    i === t.length && t.push(n), e.className = t.join(" ")
  }
  var i = n.body,
    a = n.getElementById("menu"),
    c = n.getElementById("menuLink");
  c.onclick = function(e) {
    var n = "active";
    e.preventDefault(), t(i, n), t(a, n), t(c, n)
  }
}(this, this.document);
