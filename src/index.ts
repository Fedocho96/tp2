import { connectMongoDb } from "./config/mongo";
import express from "express";
import bookRouter from "./routes/bookRouter";

process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 20000;
app.use(express.json());

app.use("/api/books", bookRouter);

app.listen(PORT, () => {
  console.log("Server on port 20000");
  connectMongoDb();
});
