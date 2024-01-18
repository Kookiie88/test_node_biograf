import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", async (request, response) => {
  const buf = await fs.readFile("./index.html");
  const html = buf.toString();

  response.send(html);
});

app.get("/index.html", async (request, response) => {
  const buf = await fs.readFile("./index.html");
  const html = buf.toString();

  response.send(html);
});

app.get("/aboutus.html", async (request, response) => {
  const buf = await fs.readFile("./aboutus.html");
  const html = buf.toString();

  response.send(html);
});

app.get("/filmer.html", async (request, response) => {
  const buf = await fs.readFile("./filmer.html");
  const html = buf.toString();

  response.send(html);
});

app.get("/filmer.html", async (request, response) => {
  const buf = await fs.readFile("./filmer.html");
  const html = buf.toString();

  response.send(html);
});

app.get("/newsevents.html", async (request, response) => {
  const buf = await fs.readFile("./newsevents.html");
  const html = buf.toString();

  response.send(html);
});

app.get("/oursponsors.html", async (request, response) => {
  const buf = await fs.readFile("./oursponsors.html");
  const html = buf.toString();

  response.send(html);
});

app.use("/lib", express.static("./lib"));
app.use("/assets", express.static("./assets"));
app.listen(3080);
