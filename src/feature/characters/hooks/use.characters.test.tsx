/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { CharacterStructure } from "../models/Character";
import { CharacterApiRepo } from "../services/repository/character.api.repo";
import { useCharacters } from "./use.characters";
import { store } from "../../../core/store/store";

const mockCharacter: CharacterStructure = {
  isAlive: true,
  characterName: "Joffrey",
  family: "Baratheon",
  age: 25,
  picture: "/joffrey.jpg",
  message: "Vais a morir todos",
  category: "king",
};

describe("Given the useCharacters Custom Hook and TestComponent", () => {
  let mockRepo: CharacterApiRepo;

  beforeEach(async () => {
    mockRepo = {
      loadCharacters: jest.fn(),
      updateCharacter: jest.fn(),
    } as unknown as CharacterApiRepo;

    const TestComponent = function () {
      const { updateCharacter } = useCharacters(mockRepo);

      return (
        <>
          <button onClick={() => updateCharacter(mockCharacter)}>Load</button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });

  describe("When the TestComponent is rendered", () => {
    test("Then, the button should be in the document", async () => {
      const element = await screen.findByRole("button");
      expect(element).toBeInTheDocument();
    });

    describe("When the TestComponent is rendered", () => {
      test("Then, the button should be in the document", async () => {
        const element = await screen.findByRole("button");
        await act(async () => userEvent.click(element));
        expect(mockRepo.updateCharacter).toHaveBeenCalled();
      });
    });
  });
});
