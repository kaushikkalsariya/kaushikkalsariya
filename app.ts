import express from "express";
import { NAME } from "./util";
import router from "./routes";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h2>My ${NAME}</h2>`);
});

app.use(router);

app.listen(8000, () => {
  console.log("Application Running");
});
