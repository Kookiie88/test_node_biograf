import express from "express";
import { engine } from "express-handlebars";
import fs from "fs/promises";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

const menu = [
  { name: "About us", url: "/aboutus" },
  { name: "News & events", url: "/newsevents" },
];

async function renderPage(response, page) {
  response.render(page, {
    menuLink: menu.map((link) => {
      return {
        label: link.name,
        link: link.url,
      };
    }),
  });
}

app.get("/", async (request, response) => {
  renderPage(response, "index");
});

app.get("/aboutus", async (request, response) => {
  renderPage(response, "aboutus");
});

app.get("/newsevents", async (request, response) => {
  renderPage(response, "newsevents");
});

app.use("/static", express.static("./static"));
app.use("/src", express.static("./src"));
app.listen(5080);
