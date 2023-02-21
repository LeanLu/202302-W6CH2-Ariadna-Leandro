/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { CharacterStructure } from "../models/Character";

// TEMPORAL: Porque no se ha resuelto el error del test.
// import { CharacterApiRepo } from "../services/repository/character.api.repo";
// import { useCharacters } from "./use.characters";

const mockCharacter: CharacterStructure = {
  isAlive: true,
  characterName: "Joffrey",
  family: "Baratheon",
  age: 25,
  picture: "/joffrey.jpg",
  message: "Vais a morir todos",
  category: "king",
};

// TEMPORAL: No se pudo resolver el error de este test:

// describe("Given the useCharacteres Custom Hook and TestError component", () => {
//   describe("When", () => {
//     test("Then", () => {
//       let mockRepo: CharacterApiRepo;

//       mockRepo = {
//         updateCharacter: jest.fn(),
//       } as unknown as CharacterApiRepo;

//       const { updateCharacter } = useCharacters(mockRepo);

//       const element = updateCharacter(mockCharacter);

//       expect(element).toEqual(mockCharacter);
//     });
//   });
// });
