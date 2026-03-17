import express from "express";
import { PORT } from "./env.js";
import path from "path";
import { json } from "zod";

// const app = express();

// // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// // const jsonData = await response.json();
// // console.log(jsonData);

// const staticPath = path.join(import.meta.dirname, "public");
// app.use("/public", express.static(staticPath));

// // app.get("/", (req, res) => {
// //   res.send("<h1>India won the match</h1>");
// // });

// // app.get("/about", (req, res) => {
// //   res.send("<h1>wellcome to about page</h1>");
// // });

// // app.get("/", (req, res) => {
// // //   // console.log(__dirname);
// // //   // console.log(__filename);
// // //   // res.send("HI");
// // //   // console.log(import.meta.url);
// // //   // const __filename = new URL(import.meta.url).pathname;
// // //   // console.log(__filename);

// //   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
// //   res.sendFile(homePagePath);
// // });

// // console.log(import.meta.dirname);
// // console.log(import.meta.filename);

// // console.log(process);
// // const PORT = process.env.PORT || 3000;

// //---> for creating dynamic route

// app.get("/profile/:username", (req, res) => {
//   console.log(req.params);
//   res.send("Hellow");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at port:${PORT}`);
// });