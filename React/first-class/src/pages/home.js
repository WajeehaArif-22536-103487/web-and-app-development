import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); // redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for modern web and app development.</p>
        <a href="/about" className="btn">Learn More</a>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Fast</h3>
          <p>Experience lightning-fast performance across all platforms.</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>We follow best practices to ensure your data stays safe.</p>
        </div>
        <div className="feature">
          <h3>Responsive</h3>
          <p>Beautiful on any screen size — mobile, tablet, or desktop.</p>
        </div>
      </section>

      {user && (
        <div className="user-info">
          <h2> Logged in</h2>
          {user.photoURL && <img src={user.photoURL} alt="User" style={{ width: "80px", borderRadius: "50%" }} />}
          <p><strong>Email:</strong> {user.email}</p>
          {user.displayName && <p><strong>Name:</strong> {user.displayName}</p>}
          <button onClick={handleLogout}className="logout-button" >Logout</button>
        </div>
      )}
    </div>
  );
}

export default Home;
