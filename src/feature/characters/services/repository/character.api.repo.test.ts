import { CharacterApiRepo } from "./character.api.repo";

describe("Given CharacterApiRepo class", () => {
  describe("When the class is instanced", () => {
    let repo: CharacterApiRepo;

    beforeEach(() => {
      repo = new CharacterApiRepo();
    });

    test("Then if the loadCharacter() method is called with response Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
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

    test("Then if the loadCharacter() method is called without response Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(null),
      });

      await expect(repo.loadCharacter()).rejects.toThrow("Error Http");
    });

    test("Then if the updateCharacter() method is called, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
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

    test("Then if the updateCharacter() method is called without response Ok, the result should be equal to the mock value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(null),
      });

      await expect(repo.updateCharacter({})).rejects.toThrow("Error Http");
    });
  });
});
