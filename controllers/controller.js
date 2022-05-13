const { selectRecipes, selectRecipeById } = require("../models/model.js");

const getRecipes = (req, res) => {
    selectRecipes().then((recipes) => {
        res.status(200).send({ recipes });
    });
};

const getRecipeById = (req, res) => {
    const { id } = req.params;
    selectRecipeById(id)
        .then((recipie) => {
            res.status(200).send({ recipie });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { getRecipeById, getRecipes };
