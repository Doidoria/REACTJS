import logo from './logo.svg';
import './App.css';

import {BrowserRouter as BR, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BR>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BR>
    </div>
  );
}

export default App;