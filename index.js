import express from "express";
import { engine } from "express-handlebars";
import { getMovie, getMovies } from "./src/movies.js";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

const menu = [
  { name: "About us", url: "/aboutus" },
  { name: "News & events", url: "/newsevents" },
];

async function renderPage(response, page, extraData = {}) {
  response.render(page, {
    menuLink: menu.map((link) => {
      return {
        label: link.name,
        link: link.url,
      };
    }),
    ...extraData,
  });
}

app.get("/", async (request, response) => {
  const movies = await getMovies();
  renderPage(response, "index", { movies });
});

app.get("/aboutus", async (request, response) => {
  renderPage(response, "aboutus");
});

app.get("/newsevents", async (request, response) => {
  renderPage(response, "newsevents");
});

app.get("/movies/:movieId", async (request, response) => {
  const movie = await getMovie(request.params.movieId);
  renderPage(response, "movie", { movie });
});

app.use("/static", express.static("./static"));
app.use("/src", express.static("./src"));
app.listen(5080);
