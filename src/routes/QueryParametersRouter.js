import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/ContactPhone";

function QueryParametersRouter() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/home?name=John">Home</Link> |
          <Link to="/about?topic=React">About</Link> |
          <Link to="/contact?method=email">Contact</Link>
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

export default QueryParametersRouter;
