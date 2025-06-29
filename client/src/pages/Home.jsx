import { useEffect, useState } from "react";
import API from "../api";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    API.get("/recipes").then((res) => setRecipes(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">All Recipes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
