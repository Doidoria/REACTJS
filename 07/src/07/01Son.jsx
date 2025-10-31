import { useState,useEffect,useContext } from "react"
import CustomContext from './Context'

const Son_01 = ({user, onChangeName, onChangeGlobal})=>{

    const [name,setName] = useState(user)
    const {globalState, setGlobalState} = useContext(CustomContext)
    const [localGlobal, setLocalGlobal] = useState(globalState)
    
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleChange2 = (e) =>{
        setLocalGlobal(e.target.value)
    }
    const handleClick = ()=>{
        onChangeName(name)
        onChangeGlobal(localGlobal)
    }
    return (
        <div>
            <h3>SON_01 COMPONENT</h3>
            자식 상태값 (name) : {name} <br/>
            전역 변수 : {localGlobal} <br/>
            자식 상태값 : <input onChange={handleChange} className='input' type="text" value={name} /> <br/>
            전역 변수 : <input onChange={handleChange2} className='input' type="text" value={localGlobal} /> <br/>
            <button onClick={handleClick}>부모 상태값 변경</button>
        </div>
    )
}

export default Son_01