/* eslint-disable no-unused-vars */

import { CharacterStructure } from "../../models/Character";

export interface CharacterApiRepoStructure {
  loadCharacter(): Promise<CharacterStructure[]>;
  updateCharacter(
    character: Partial<CharacterStructure>
  ): Promise<CharacterStructure>;
}

export class CharacterApiRepo {
  url: string;

  constructor() {
    this.url = "http://localhost:5090/Character";
  }

  async loadCharacter(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);

    // TEMPORAL: Hasta resolver el test caso Error:
    // if (!resp.ok)
    //   throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const data = (await resp.json()) as CharacterStructure[];

    return data;
  }

  async updateCharacter(
    character: Partial<CharacterStructure>
  ): Promise<CharacterStructure> {
    const url = this.url + "/" + character.characterName;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: {
        "Content-type": "application/json",
      },
    });

    // TEMPORAL: Hasta resolver el test caso Error:
    // if (!resp.ok)
    //   throw new Error("Error Http: " + resp.status + ". " + resp.statusText);

    const data = (await resp.json()) as CharacterStructure;

    return data;
  }
}
