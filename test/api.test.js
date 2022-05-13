const supertest = require("supertest");
const server = require("../server");

const request = supertest(server);

test("/api", async () => {
    const { body } = await request.get("/api").expect(200);
    expect(body.message).toBe("ok");
});

test("/api/recipes", async () => {
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

test("/api/recipes/:id", async () => {
    const { body } = await request.get("/api/recipes/59").expect(200);
    console.log(body);
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
