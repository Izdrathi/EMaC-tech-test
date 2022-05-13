const apiRouter = require("express").Router();
const { readFile } = require("fs/promises");

apiRouter.get("/", (_, res) => {
    res.json({ message: "ok" });
});

apiRouter.get("/recipies", (req, res) => {
    readFile("./data/data.json", "utf-8").then((fileContents) => {
        const recipies = JSON.parse(fileContents);
        res.status(200).send({ recipies });
    });
});

module.exports = apiRouter;
