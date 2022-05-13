const apiRouter = require("express").Router();
const { getRecipeById, getRecipes } = require("../controllers/controller.js");

apiRouter.get("/", (_, res) => {
    res.json({ message: "ok" });
});

apiRouter.get("/recipes", getRecipes);
apiRouter.get("/recipes/:id", getRecipeById);

module.exports = apiRouter;
