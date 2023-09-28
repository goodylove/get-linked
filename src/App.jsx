import { SVG } from "./constants/Icons";
import Button from "./components/Button.jsx";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Contact, { ContactPage } from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import "./App.css";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
