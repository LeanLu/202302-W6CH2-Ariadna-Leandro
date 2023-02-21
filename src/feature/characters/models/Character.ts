export type Character = {
  characterName: string;
  family: string;
  age: number;
  picture: string;
  isAlive: boolean;
  series: string;
  weapon?: string;
  skill?: number;
  kingdomYears?: number;
  assess?: string;
  knight?: string;
  category: Category;
};

type Category = "king" | "counselor" | "fighter" | "squire";
