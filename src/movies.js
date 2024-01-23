import fetch from "node-fetch";

const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function getMovies() {
  const response = await fetch(API_BASE + "/movies");
  const payload = await response.json();
  return payload.data;
}

export async function getMovie(id) {
  const response = await fetch(API_BASE + "/movies/" + id);
  const payload = await response.json();
  return payload.data;
}
