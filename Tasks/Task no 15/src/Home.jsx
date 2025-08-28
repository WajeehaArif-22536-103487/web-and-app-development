import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Keep user logged in on refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // update user state
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="container">
      <h1>Home Page</h1>
      {user ? (
        <>
          <img
            src={user.photoURL}
            alt="Profile"
            width="100"
            className="profile-img"
          />
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>No user logged in</p>
          <Link to="/login">Go to Login</Link>
        </>
      )}
    </div>
  );
}

export default Home;
