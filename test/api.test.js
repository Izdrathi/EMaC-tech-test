const supertest = require("supertest");
const server = require("../server");

const request = supertest(server);

test("/api", async () => {
    const { body } = await request.get("/api").expect(200);
    expect(body.message).toBe("ok");
});

test("/api/recipes", async () => {
    const { body } = await request.get("/api/recipes").expect(200);
    body.recipies.forEach((recipe) => {
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
