// JS Goes here - ES6 supported
// JS Goes here - ES6 supported
Array.from(document.getElementsByClassName("switch") || []).forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.cookie = `nf_ab=${el.getAttribute("data-branch")}`;
    document.location.reload();
  }, false);
});
