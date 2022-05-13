const { selectRecipes, selectRecipeById } = require("../models/model.js");

const getRecipes = (req, res, next) => {
    selectRecipes()
        .then((recipes) => {
            res.status(200).send({ recipes });
        })
        .catch((err) => {
            next(err);
        });
};

const getRecipeById = (req, res, next) => {
    const { id } = req.params;
    selectRecipeById(id)
        .then((recipe) => {
            res.status(200).send({ recipe });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports = { getRecipeById, getRecipes };
