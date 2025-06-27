import { useEffect, useState } from "react";
import API from "../api";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    API.get("/recipes").then((res) => setRecipes(res.data));
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
