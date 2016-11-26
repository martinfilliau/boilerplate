import http from "http";
import express from "express";
import cors from "cors";

import { statusRouter } from "./routes/status";
import { pnrsRouter } from "./routes/pnrs";

const app = express();

app.server = http.createServer(app);

app.use(express.static("public"));
app.use(express.static("built"));
app.use(express.static("src/front/")); // TO DO need to be improved

app.use(cors());
app.use("/status", statusRouter);
app.use("/pnrs", pnrsRouter);


app.listen(3000, () => {
    console.log("listening on port 3000");
});

export default app;

