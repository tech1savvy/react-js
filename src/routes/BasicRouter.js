import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/ContactPhone";
function BasicRouter() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default BasicRouter;
