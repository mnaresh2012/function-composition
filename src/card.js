module.exports = function cardHTML({title, description, imageUrl}) {
  return `
  <div class="card">
    <img class="card-img-top" src="${imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>
`;
}