import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    API.get(`/recipes/${id}`).then((res) => setRecipe(res.data));
  }, [id]);

  if (!recipe) return <div className="p-6 text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700">{recipe.title}</h2>

      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Description:</span> {recipe.description}
      </p>

      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Instructions:</span> {recipe.instructions}
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {recipe.ingredients.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
