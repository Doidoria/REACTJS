import logo from './logo.svg';
import './App.css';

import Component_01 from './05조건부랜더링/01_Component';
import Component_02 from './05조건부랜더링/02_Component';
import Component_03 from './05조건부랜더링/03_Component';

function App() {
  return (
    <div className="App">
      <h1>조건부 랜더링</h1>
      {/* if */}
      <Component_01 isAuth={true}/>
      {/* <Component_01_btn/> */}
      <hr/>
      {/* 삼항연산자 */}
      <Component_02 isAuth={true}/>
      <hr/>
      {/* && */}
      <Component_03 items={['aaa','bbb','ccc','ddd']}/>
    </div>
  );
}

export default App;