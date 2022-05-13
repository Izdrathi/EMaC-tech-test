const supertest = require("supertest");
const server = require("../server");

const request = supertest(server);

test("/api", async () => {
    const { body } = await request.get("/api").expect(200);
    expect(body.message).toBe("ok");
});

test("/api/recipies", async () => {
    const { body } = await request.get("/api/recipies").expect(200);
    body.recipies.forEach((recipie) => {
        expect(recipie).toEqual(
            expect.objectContaining({
                id: expect.any(String),
                imageUrl: expect.any(String),
                instructions: expect.any(String),
                ingredients: expect.any(Array),
            })
        );
    });
});
