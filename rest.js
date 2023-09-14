"use strict";

import { showArtists } from "./app.js";

const endpoint = "http://localhost:3000";

async function readArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const data = response.json();
  return data;
}

async function updateArtistsGrid() {
  const artists = await readArtists();
  showArtists(artists);
}

export { updateArtistsGrid };
