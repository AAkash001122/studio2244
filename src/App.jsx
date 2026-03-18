import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import About from "./pages/About";
import Progress from "./pages/progress"; // Naya wala services page
import Clients from "./pages/Clients";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Progress />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
