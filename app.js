"use strict";

import { updateArtistsGrid } from "./rest.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS kører");
  await updateArtistsGrid();
}

function showArtists(artists) {
  document.querySelector("#artists").innerHTML = "";
  for (const artist of artists) {
    const html =
      /*html*/
      `
      <article class="grid-item-artist">
      <h2>${artist.name}</h2>
      <p>Career start: ${artist.career_start}</p>
    
  
      </article>
    `;
    document.querySelector("#artists").insertAdjacentHTML("beforeend", html);
  }
}

function showAlbums(albums) {
  document.querySelector("#albums").innerHTML = "";
  for (const album of albums) {
    const html =
      /*html*/
      `
      <article class="grid-item-artist">
      <h2>${album.title}</h2>
      <p>${album.release_date}</p>
      </article>
    `;
    document.querySelector("#albums").insertAdjacentHTML("beforeend", html);
  }
}

export { showArtists, showAlbums };
