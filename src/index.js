import http from "http";
import express from "express";
import cors from "cors";

const app = express();

app.server = http.createServer(app);

app.use(cors());

app.listen(3000, () => {
    console.log("listening on port 3000");
});

export default app;

