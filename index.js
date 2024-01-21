import express from "express";
import { engine } from "express-handlebars";
import fs from "fs/promises";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

const menu = [
  { name: "index", url: "/" },
  { name: "aboutus", url: "/aboutus" },
  { name: "fi lmer", url: "/filmer" },
  { name: "newsevents", url: "/newsevents" },
  { name: "oursponsors", url: "/oursponsors" },
];

async function renderPage(response, page) {
  response.render(page);
}

app.get("/", async (request, response) => {
  renderPage(response, "index");
});

app.get("/aboutus", async (request, response) => {
  renderPage(response, "aboutus");
});

app.get("/filmer", async (request, response) => {
  renderPage(response, "filmer");
});

app.get("/newsevents", async (request, response) => {
  renderPage(response, "newsevents");
});

app.get("/oursponsors", async (request, response) => {
  renderPage(response, "oursponsors");
});

app.use("/lib", express.static("./lib"));
app.use("/assets", express.static("./assets"));
app.listen(3080);
