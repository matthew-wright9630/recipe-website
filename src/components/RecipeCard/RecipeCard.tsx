//This will have a name, a short description, an image, and a full description.
type recipeCardsProps = {
  name: string;
  shortDescription: string;
  image?: string;
  fullDescription?: string;
};

function RecipeCard({
  name,
  shortDescription,
  image,
  fullDescription,
}: recipeCardsProps) {
  return (
    <div className="border">
      <h3 className="text-3xl text-center">{name}</h3>
      <p className="text-xl text-center">{shortDescription}</p>
      {image ? <img src={image} alt={name} /> : ""}
    </div>
  );
}

export default RecipeCard;
