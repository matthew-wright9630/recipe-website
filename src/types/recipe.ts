type Ingredient = {
  name: string;
  amount: number;
  unitOfMeasure:
    | "cup"
    | "oz"
    | "gallon"
    | "ml"
    | "l"
    | "g"
    | "mg"
    | "tbsp"
    | "tsp";
  notes?: string;
};

type RecipeHeader = {
  servings: string;
  prepTime: string;
  cookTime: string;
};

export type Recipe = {
  name: string;
  description: string;
  image: string;
  directions: Array<string>;
  ingredients: Array<Ingredient>;
  recipeHeader: RecipeHeader;
  notes?: string;
  author: string;
  id: string;
};

export type RecipeGroups = {
  groupName: Array<string>;
  recipeId: Array<string>;
  groupImage: string;
};
