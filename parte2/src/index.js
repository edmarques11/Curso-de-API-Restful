const express = require("express");

const app = express();

app.use(express.json());

const projects = [];

app.get("/projects", (request, response) => {
  const { title, owner } = request.query;
  console.log(title, owner);
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4"]);
});

app.post("/projects", (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json(["Projeto 5"]);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  console.log(`project ${id} is changed`);
  return response.json({
    before: "Projeto 5",
    after: "Projeto 5...",
  });
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;
  console.log(`project ${id} is deleted`);
  return response.json({
    deleted: ["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4"],
  });
});

app.listen(3000, () => {
  console.log("backend started...");
});
