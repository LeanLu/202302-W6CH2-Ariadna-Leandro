import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { CharacterStructure } from "../models/Character";
import * as ac from "../reducer/character.actions.creator";
import { CharacterApiRepo } from "../services/repository/character.api.repo";

export function useCharacters(repo: CharacterApiRepo) {
  const characters = useSelector((state: RootState) => state.characters);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await repo.loadCharacters();

        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadCharacters();
  }, [dispatch, repo]);

  const updateCharacter = async (character: Partial<CharacterStructure>) => {
    try {
      const finalCharacter = await repo.updateCharacter(character);
      dispatch(ac.updateCreator(finalCharacter));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    characters,
    updateCharacter,
  };
}
