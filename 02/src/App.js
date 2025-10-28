import logo from './logo.svg';
import './App.css';
import { Element1, Element2, Element3, Element4, Element5 } from "./02JSX/01_Basic"
import Basic_01 from "./02JSX/01_Basic"
import CUstomComponent from "./02JSX/02_CustomComponent"
// 보통 파일 하나당 컴포런트 하나만 지정 ↑
import {Component_Event_01, Component_Event_02, Component_Event_03} from "./02JSX/03_Event"

function App() {
  // State
  const footerState = "Footer State.."
  const headerState = "Header State.."

  return (
    <div className="App">
      <header className="gnb" style={{height:"100px",backgroundColor:"orange"}}>
        <h1>{headerState}</h1>
      </header>
      <main>
        <section>
          <h1>01_Basic</h1>
          <div>
            <Element1></Element1>
            <Element2></Element2>
            <Element3 auth={"ROLE_USER"} name="홍길동"></Element3>
            <Element3 auth={"ROLE_ADMIN"} name="관리자"></Element3>
            <hr></hr>
            <Element4 auth={"ROLE_USER"} name="김범수"></Element4>
            <Element4 auth={"ROLE_ADMIN"} name="어드민"></Element4>
            <hr></hr>
            <Element5 list={["aaa", "bbb", "ccc", "ddd"]} ></Element5>
            <hr></hr>
            <Basic_01.DefaultComponent1></Basic_01.DefaultComponent1>
            <Basic_01.DefaultComponent2></Basic_01.DefaultComponent2>
            <hr></hr>
          </div>
        </section>
        <section>
          <h1>02_CUSTOMCOMPONENT</h1>
          <div>
            <CUstomComponent></CUstomComponent>
          </div>
        </section>
        <section>
          <h1>03_EVENT_HANDLER</h1>
          <div>
            <Component_Event_01></Component_Event_01>
            <Component_Event_02></Component_Event_02>
            <Component_Event_03></Component_Event_03>
          </div>
        </section>
      </main>
      <footer className="footer-wrap" style={{height:"150px",backgroundColor:"skyblue"}}>
        <h1>{footerState}</h1>
      </footer>
    </div>
  );
}

export default App;
