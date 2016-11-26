import http from "http";
import express from "express";
import cors from "cors";

import { statusRouter } from "./routes/status";

const app = express();

app.server = http.createServer(app);

app.use(express.static("public"));
app.use(express.static("dist"));

app.use(cors());
app.use("/status", statusRouter);


app.listen(3000, () => {
    console.log("listening on port 3000");
});

export default app;

