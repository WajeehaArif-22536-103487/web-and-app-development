import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, githubProvider } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      setMessage("✅ Github login successful!");
      navigate("/"); // 
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
      </form>

      <button type="button" onClick={handleGithubLogin}>
        Login with GitHub
      </button>

      {message && <p>{message}</p>}

      <p>
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
