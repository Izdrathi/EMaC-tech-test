const fs = require("fs/promises");
const filePath = "./data/data.json";

const selectRecipes = (filters) => {
    // attempt at filtering by query
    let recipesArray = [];
    let storedId = [];
    return fs.readFile(filePath, "utf8").then((fileContents) => {
        const recipes = JSON.parse(fileContents);
        // attempt at filtering by query
        for (let i = 0; i < recipes.length; i++) {
            for (const key in recipes[i]) {
                if (key === "ingredients") {
                    Object.values(recipes[i][key]).forEach((value) => {
                        if (value.name === filters.exclude_ingredients) {
                            storedId.push(recipes[i].id);
                        }
                        console.log(storedId);
                        console.log(recipes[i]);
                        recipesArray.push(recipes[i]);
                    });
                }
            }
        }
        console.log(storedId);
        const result = recipesArray.filter((item) => {
            item.id != storedId[0];
        });
        return result;
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
