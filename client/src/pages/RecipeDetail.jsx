import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    API.get(`/recipes/${id}`).then((res) => setRecipe(res.data));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
