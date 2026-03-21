import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, "../data/input.txt");
const outputPath = path.join(__dirname, "../data/output.txt");

const readStream = fs.createReadStream(inputPath, {
  encoding: "utf-8",
  highWaterMark: 1024,
});

const writeStream = fs.createWriteStream(outputPath);

readStream.pipe(writeStream);

console.log(`---- Streaming is starting ......`);

readStream.on("data", (chunk) => {
  console.log(`new chunk is arrived`);
  console.log(chunk.length + `characters received`);
  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.log(`entire file is readed`);
  writeStream.close();
});

readStream.on("error", (err) => console.log("Read Error:", err.message));
writeStream.on("error", (err) => console.log("Write Error:", err.message));
