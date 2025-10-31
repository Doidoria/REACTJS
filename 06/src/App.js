import logo from './logo.svg';
import './App.css';

import {BrowserRouter as BR, Routes, Route} from "react-router-dom"


import Home from './06ROUTE/Home';
import Contact from './06ROUTE/Contact';
import About from './06ROUTE/About';

function App() {
  return (
    <div className="App">
      <h1>REACT ROUTE</h1>

      <BR>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact/:name/:age" element={<Contact/>}/> 
          {/* name?, age? = null 값도 가능 */}
        </Routes>
      </BR>
    </div>
  );
}

export default App;