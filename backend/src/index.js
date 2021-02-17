const express = require("express");

const app = express();

app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto 5"]);
});

app.put("/projects", (request, response) => {
  return response.json({
    before: "Projeto 5",
    after: "Projeto 5...",
  });
});

app.delete("/projects", (request, response) => {
  return response.json({
    deleted: ["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4"],
  });
});

app.listen(3000, () => {
  console.log("backend started...");
});
