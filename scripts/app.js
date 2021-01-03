let key = "563492ad6f91700001000001ee3a6c866d7241d4aa893d151007750c";

(async function () {
  const response = await axios.get(
    "https://api.pexels.com/v1/search?query=people",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "563492ad6f91700001000001ee3a6c866d7241d4aa893d151007750c",
      },
    }
  );
  createCard(response);
})();

function createCard(response) {
  response.data.photos.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <img src=${photo.src.original} alt="" />
          <div class="card-footer">
            <div class="card-footer-info">
              <span>${photo.photographer}</span>
            </div>
            <i class="far fa-bookmark"></i>
          </div>
        `;
    container = document.querySelector("main");
    container.insertBefore(card, container.lastElementChild);
  });
  console.log(response);
}
