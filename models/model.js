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
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].id.includes(id)) {
                return recipes[i];
            }
        }
    });
};

module.exports = { selectRecipeById, selectRecipes };
