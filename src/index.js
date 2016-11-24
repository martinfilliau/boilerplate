import http from "http";
import express from "express";
import cors from "cors";

const app = express();

app.server = http.createServer(app);

app.use(cors());

export default app;

