const fs = require("fs/promises");
const filePath = "./data/data.json";

const selectRecipes = (id) => {
    return fs.readFile(filePath, "utf8").then((fileContents) => {
        const recipes = JSON.parse(fileContents);
        return recipes;
    });
};

const selectRecipeById = (id) => {
    return fs.readFile(filePath, "utf8").then((fileContents) => {
        const recipes = JSON.parse(fileContents);
        console.log(recipes.id, 111111);
    });
};

module.exports = { selectRecipeById, selectRecipes };
