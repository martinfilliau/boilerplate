import * as express from "express";

export const statusRouter = express.Router();

statusRouter.get("/flight", (req, res) => {
    res.json({todo: "yes"});
});

