import { Routes, Route } from "react-router-dom";
import Home from "./Task no 13/pages/home";
import About from "./Task no 13/pages/about";
import Contact from "./Task no 13/pages/contact";
import Login from "./Task no 13/pages/login";
import Register from "./Task no 13/pages/register";
import Navbar from "./Task no 13/layouts/navbar";
import DashBoard from "./Task no 14/dashBoard";
import "./Task no 13/layouts/style.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<DashBoard />} />
      </Routes>
    </>
  );
}
export default App;
