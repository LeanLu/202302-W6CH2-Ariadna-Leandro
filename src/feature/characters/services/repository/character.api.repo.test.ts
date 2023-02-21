import { CharacterApiRepo } from "./character.api.repo";

describe("Given CharacterApiRepo class", () => {
  describe("When the class is instanced", () => {
    let repo: CharacterApiRepo;

    beforeEach(() => {
      repo = new CharacterApiRepo();
    });

    test("Then if the loadCharacter() method is called, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([
          {
            characterName: "test",
          },
        ]),
      });

      const result = await repo.loadCharacter();
      expect(result).toEqual([
        {
          characterName: "test",
        },
      ]);
    });

    test("Then if the updateCharacter() method is called, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          characterName: "test",
        }),
      });

      const result = await repo.updateCharacter({
        characterName: "test",
      });
      expect(result).toEqual({
        characterName: "test",
      });
    });
  });
});
