import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Navbar from "./components/nav";
import Register from "./pages/register";
import Main from "./pages/main"
import Prop1 from "./components/props1"
import Signup from "./pages/signin";
import Post from "./pages/post";
function App() {
    const name ="App no 01"
   return (
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/promps" element ={  <Prop1 name ={name}/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<Signup />} />
                <Route path="/post" element={<Post />} />
         </Routes>
         
      </BrowserRouter>
    
   );
}

export default App;

