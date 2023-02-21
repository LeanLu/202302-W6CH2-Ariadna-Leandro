import { CharacterStructure } from "../models/Character";
import { loadCreator, updateCreator } from "./character.actions.creator";
import { characterReducer } from "./character.reducer";

describe("Given the character reducer", () => {
  describe("When we passed an empty action", () => {
    test("Then, it should return the initial state", () => {
      const initialState = undefined;

      const action = { type: "" };

      const result = characterReducer(initialState, action);

      expect(result).toEqual([]);
    });
  });

  describe("When we passed the load action", () => {
    test("Then, it should return the initial state", () => {
      const result = characterReducer([], loadCreator);

      expect(result).toEqual([]);
    });
  });

  describe("When we passed the update action", () => {
    test("Then, it should return the initial state", () => {
      const mockState: CharacterStructure[] = [
        {
          isAlive: true,
          characterName: "Joffrey",
          family: "Baratheon",
          age: 25,
          picture: "/joffrey.jpg",
          message: "Vais a morir todos",
          category: "king",
        },
        {
          isAlive: true,
          characterName: "Tyrion",
          family: "Lannister",
          age: 25,
          picture: "/tyrion.jpg",
          message: "No sé por qué, pero creo que voy a morir pronto",
          category: "counselor",
        },
      ];

      const payload: CharacterStructure = {
        isAlive: true,
        characterName: "Joffrey",
        family: "Baratheon",
        age: 25,
        picture: "/joffrey.jpg",
        message: "Vais a morir todos",
        category: "king",
      };

      const result = characterReducer(mockState, updateCreator(payload));

      expect(result).toEqual(mockState);
    });
  });
});
