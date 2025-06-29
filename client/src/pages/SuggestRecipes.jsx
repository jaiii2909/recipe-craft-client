import { useState } from "react";
import API from "../api";

export default function SuggestRecipes() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await API.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(query)}&number=9&apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`
      );
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching recipes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Get Recipe Suggestions</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter ingredients, comma-separated"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((r) => (
            <a
              key={r.id}
              href={`https://spoonacular.com/recipes/${r.title.replace(/\s+/g, "-")}-${r.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              {r.image && (
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-2"
                />
              )}
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="text-gray-600 mt-2">
                <strong>Uses:</strong> {r.usedIngredientCount}, <strong>Missed:</strong> {r.missedIngredientCount}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
