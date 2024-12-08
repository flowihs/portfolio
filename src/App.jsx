

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./styles/main.css";
import Home from './pages/Home';
import Navbar from "./components/nav bar/Navbar";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Project from './pages/Project'
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
        
          <Router> 
            <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Project/:id" element={<Project />} />
              </Routes>
            <Footer />
          </Router>
        
    </div>

  );
}



export default App;
