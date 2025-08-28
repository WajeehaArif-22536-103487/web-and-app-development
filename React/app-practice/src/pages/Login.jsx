import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginEmail = async () => {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  };
  const loginGoogle = async () => {
    try {
      setError("");
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-md mx-auto px-4">
        <Card>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <div className="grid gap-3">
            <input
              className="border rounded-xl px-3 py-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border rounded-xl px-3 py-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              onClick={loginEmail}
              className="rounded-xl px-4 py-2 bg-purple-600 text-white"
            >
              Login
            </button>
            <button
              onClick={loginGoogle}
              className="rounded-xl px-4 py-2 border"
            >
              Continue with Google
            </button>
            <p className="text-sm text-gray-600">
              No account?{" "}
              <Link to="/register" className="text-purple-600">
                Register
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
