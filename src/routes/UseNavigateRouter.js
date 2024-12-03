import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/ContactPhone";

function NavigateButtons() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
    </div>
  );
}

function UseNavigateRouter() {
  return (
    <div>
      <BrowserRouter>
        <NavigateButtons />
        <div>
          <Link to="/home?name=Tech1savvy">Home</Link> |
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

export default UseNavigateRouter;
