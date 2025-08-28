import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

function useAuthState() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged?.((u) => setUser(u));
    return () => unsub && unsub();
  }, []);
  return user;
}

export default function Navbar() {
  const user = useAuthState();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 bg-white border-b z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
        <Link to="/" className="font-bold text-xl">
          LuxeHomes
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 border rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="px-3 py-1.5 border rounded-xl">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
