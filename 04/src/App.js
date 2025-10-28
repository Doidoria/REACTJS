import logo from './logo.svg';
import './App.css';

import EventComponent_01 from './04EVENT/01_OnClick'
import EventComponent_02 from './04EVENT/02_OnMouse'
import EventComponent_03 from './04EVENT/03_OnKey'
import EventComponent_04 from './04EVENT/04_OnChange'
import EventComponent_05 from './04EVENT/05_OnSubmit'
import EventComponent_06 from './04EVENT/06_OnScroll'

function App() {
  return (
    <div className="App">
      <h1>EVENT HANDLING</h1>
      {/* 01 OnClick */}
      <EventComponent_01/>
      <hr></hr>
      {/* 02 OnMouse */}
      <EventComponent_02/>
      <hr></hr>
      {/* 03 OnKey */}
      <EventComponent_03/>
      <hr></hr>
      {/* 04 OnChange */}
      <EventComponent_04/>
      <hr></hr>
      {/* 05 OnForm */}
      <EventComponent_05/>
      <hr></hr>
      {/* 06 OnScroll */}
      <EventComponent_06/>
    </div>
  );
}

export default App;