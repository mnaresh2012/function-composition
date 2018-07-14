module.exports = function createHTMLElement(html) {
  const t = document.createElement('template');

  t.innerHTML = html;

  return t.content.firstElementChild;
};
