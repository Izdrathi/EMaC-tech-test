const supertest = require("supertest");
const server = require("../server");

const request = supertest(server);

describe("/api", () => {
    test("status 200 - responds with ok message", async () => {
        const { body } = await request.get("/api").expect(200);
        expect(body.message).toBe("ok");
    });
});

describe("/api/recipes", () => {
    test("status 200 - responds with an array of recipes", async () => {
        const { body } = await request.get("/api/recipes").expect(200);
        body.recipes.forEach((recipe) => {
            expect(recipe).toEqual(
                expect.objectContaining({
                    id: expect.any(String),
                    imageUrl: expect.any(String),
                    instructions: expect.any(String),
                    ingredients: expect.any(Array),
                })
            );
        });
    });
});

describe("/api/recipes/:id", () => {
    test("status 200 - responds with a selected recipe", async () => {
        const { body } = await request.get("/api/recipes/59").expect(200);
        expect(body.recipe.id).toBe("recipe-59");
        expect(body.recipe.imageUrl).toBe("http://www.images.com/18");
        expect(body.recipe.instructions).toBe(
            "60 seconds on the highest setting your blender has, or until a smooth paste has formed"
        );
        body.recipe.ingredients.forEach((ingredient) => {
            expect(ingredient).toEqual(
                expect.objectContaining({
                    name: expect.any(String),
                    grams: expect.any(Number),
                })
            );
        });
    });
});
