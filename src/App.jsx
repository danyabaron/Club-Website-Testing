import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import MembersOnly from "./Components/MembersOnly";
import Level3Deep from "./Components/Level3Deep";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/level2" element={<MembersOnly />} />  
        <Route path="/level3" element={<Level3Deep />} />  


      </Routes>
    </Router>
  );
}

export default App;