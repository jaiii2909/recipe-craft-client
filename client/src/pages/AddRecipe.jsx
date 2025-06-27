import { useState } from "react";
import API from "../api";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/recipes", {
      title,
      description,
      ingredients: ingredients.split(","),
      instructions,
    });
    alert("Recipe added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
