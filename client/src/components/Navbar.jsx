import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Home */}
        <Link to="/" className="text-2xl font-semibold tracking-tight hover:underline">
          RecipeCraft
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4 text-sm sm:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/suggest" className="hover:underline">Suggest</Link>
          {user ? (
            <>
              <Link to="/add" className="hover:underline">Add Recipe</Link>
              <button
                onClick={logout}
                className="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
