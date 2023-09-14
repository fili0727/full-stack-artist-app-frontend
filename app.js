"use strict";

const endpoint = "http://localhost:3000";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS kører");
  await updateArtistsGrid();
}

async function readArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const data = response.json();
  return data;
}

async function updateArtistsGrid() {
  const artists = await readArtists();
  showArtists(artists);
}

function showArtists(artists) {
  document.querySelector("#artists").innerHTML = "";
  for (const artist of artists) {
    const html =
      /*html*/
      `
      <article class="grid-item-artist">
      <img src="${artist.image}">
      <p>${artist.name}</p>
      <p>${artist.career_start}</p>
      </article>
    `;
    document.querySelector("#artists").insertAdjacentHTML("beforeend", html);
  }
}
