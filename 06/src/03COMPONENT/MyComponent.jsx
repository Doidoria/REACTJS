import { useState, useEffect } from "react"

const MyComponet = ()=>{
    //State
    // let count=0
    const [count,setCount] = useState(0) // count의 초기값 지정 = 0, setCount 생성
    //handler
    const handleClick=()=>{
        // count++;
        setCount(count+1); // 비동기 함수라서 동시에 실행
        // console.log(count)
    }
    // 최초 1 회 실행(1회만 랜더링 이후 처리 Hook)
    useEffect(()=>{
        console.log("init setting");
    },[])
    // count state 가 변경될때마다 실행(변경될때마다 랜더링 이후 처리 Hook)
    useEffect(()=>{
        console.log("count state changed...",count);
    },[count])
    // useEffect(()=>{},[감시할 상태변수])
    return (
        <div>
            <h2>MyComponet...</h2>
            <button onClick={handleClick}>Btn Count : {count}</button>
        </div>
    )
}

export default MyComponet