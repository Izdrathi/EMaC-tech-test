const { selectRecipes, selectRecipeById } = require("../models/model.js");

const getRecipes = (req, res) => {
    selectRecipes()
        .then((recipes) => {
            res.status(200).send({ recipes });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getRecipeById = (req, res) => {
    const { id } = req.params;
    selectRecipeById(id)
        .then((recipe) => {
            res.status(200).send({ recipe });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { getRecipeById, getRecipes };
