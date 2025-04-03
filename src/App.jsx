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
      
      <Routes>
        <Route path="/" element={
        <>
             <Navbar />
             <Home />
        </>
        }
        />
        <Route path="/about" 
        
        element={
          <>
            <Navbar />
            <About />
          </>
          
      } 
        
        />
        <Route path="/events"  element={
          <>
            <Navbar />
            <Events />
          </>
          
      }  />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
          </>
          
      }  />
        <Route path="/login"  element={
          <>
            <Navbar />
            <Login />
          </>
          
      }  />
        <Route path="/DraconisMembers"  element={
          <>
            <Navbar />
            <MembersOnly />
          </>
          
      }  />  
        <Route path="/WelcomeAdmin" element={<Level3Deep />} />  


      </Routes>
    </Router>
  );
}

export default App;


{/* <Route 
path="/mars-game/:screen" 
element={
  <>
    <StatusBar characters={characters} />
    <MarsGame addCharacter={addCharacter} characters={characters} />
  </>
} /> */}