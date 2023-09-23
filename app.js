"use strict";

import { updateArtistsGrid, searchBackend } from "./rest.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("JS kører");
  const searchInput = document.querySelector("#searchbar");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchBackend(query);
  });

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
      <p>Release date: ${album.release_date}</p>
      </article>
    `;
    document.querySelector("#albums").insertAdjacentHTML("beforeend", html);
  }
}

function showTracks(tracks) {
  document.querySelector("#tracks").innerHTML = "";
  for (const track of tracks) {
    const html =
      /*html*/
      `
      <article class="grid-item-artist">
      <h2>${track.title}</h2>
      <p>Duration: ${track.duration}</p>
      </article>
    `;
    document.querySelector("#tracks").insertAdjacentHTML("beforeend", html);
  }
}

export { showArtists, showAlbums, showTracks };
