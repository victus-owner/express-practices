import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Correctly point to the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// 2. Middleware for POST data
app.use(express.urlencoded({ extended: true }));

// NOTE: You can REMOVE the app.get('/') block entirely.
// express.static automatically serves index.html from the public folder.

app.get("/submit-get", (req, res) => {
  res.send(`GET Received! Hello, ${req.query.username}`);
});

app.post("/submit-post", (req, res) => {
  console.log(req.body);
  res.send(`POST Received! Hello, ${req.body.username}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
