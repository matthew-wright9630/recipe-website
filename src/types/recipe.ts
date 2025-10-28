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
  shortDescription: string;
  image: string;
  directions: Array<string>;
  ingredients: Array<Ingredient>;
  recipeHeader: RecipeHeader;
  notes?: string;
  author: string;
};

export type RecipeCardProps = Recipe & {
  handlePopupClick: (recipe: Recipe) => void;
};
