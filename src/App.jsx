import './index.css'
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'


function App() {
  return (
    <div className="App">
      {/* load navbar */}
      <Navbar />
      {/* load home page */}
      <Home />
    </div>
  )
}

export default App
