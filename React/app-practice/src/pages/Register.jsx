import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Card from "../components/Card";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerEmail = async () => {
    try {
      setError("");
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-md mx-auto px-4">
        <Card>
          <h1 className="text-2xl font-bold mb-4">Create account</h1>
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
              onClick={registerEmail}
              className="rounded-xl px-4 py-2 bg-purple-600 text-white"
            >
              Register
            </button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600">
                Login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
