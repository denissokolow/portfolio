import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contacts from "./components/Contacts"
import Projects from "./components/Projects"
import "./App.css"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='*' element={<About />}/>
      </Routes>
    </div>

  );
}

export default App;
