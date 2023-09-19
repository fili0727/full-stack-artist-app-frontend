"use strict";

import { showArtists, showAlbums } from "./app.js";

const endpoint = "http://localhost:3000";

async function readArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const data = response.json();
  return data;
}

async function readAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const data = response.json();
  return data;
}

async function updateArtistsGrid() {
  const artists = await readArtists();
  showArtists(artists);
  const albums = await readAlbums();
  showAlbums(albums);
}

export { updateArtistsGrid };
