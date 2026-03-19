import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.get("/submit-get", (req, res) => {
  res.send(`GET Received! Hello, ${req.query.username}`);
});

app.post("/submit-post", (req, res) => {
  console.log(req.body);
  res.send(`POST Received! Hello, ${req.body.username}`);
});

app.use((req, res) => {
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
