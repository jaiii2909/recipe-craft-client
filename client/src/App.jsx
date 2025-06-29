import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import SuggestRecipes from "./pages/SuggestRecipes";


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/suggest" element={<SuggestRecipes />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <div className="text-center p-10 text-3xl text-blue-500 font-bold">
        Tailwind is Working!
      </div>
    </>
  );
}

export default App;
