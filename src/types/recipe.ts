export type Recipe = {
  name: string;
  shortDescription: string;
  image?: string;
  fullDescription?: string;
};

export type RecipeCardProps = Recipe & {
  handlePopupClick: (recipe: Recipe) => void;
};
