import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app2 = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app2.use(express.static(path.join(__dirname, "public")));
app2.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
console.log("full File Path:", __filename);
console.log("Dirname : ", __dirname);

app2.get("/product", (req, res) => {
  const { name, brand } = req.query.search;
  console.log(req.query);
  res.send(`Searching for student : ${name} , and the brand is ${brand}`);
});

app2.get("/students/:studentId/courses/:subject", (req, res) => {
  const { studentId, subject } = req.params;
  console.log(req.params);

  const cleanSubject = subject.replace(/-/g, " ");

  res.send(`
    <h1> Student Profile:</h1>
    <p>Student Name: <b> ${studentId}</b></p>
    <p>View Subject : <b> ${cleanSubject}</b></p>
    `);
});

app2.listen(PORT, () => {
  console.log(`Server runnng on ${PORT}`);
});
