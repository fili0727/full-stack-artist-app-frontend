"use strict";

import { showArtists, showAlbums, showTracks } from "./app.js";

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

async function readTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const data = response.json();
  return data;
}

async function updateGrids() {
  const artists = await readArtists();
  showArtists(artists);
  const albums = await readAlbums();
  showAlbums(albums);
  const tracks = await readTracks();
  showTracks(tracks);
}

export { updateGrids };
