const EventComponent_06 = ()=>{
    const handlerScroll = (e)=>{
        console.log(e.target.scrollTop)
    }

    return (
        <div style={{height:"500px",backgroundColor:"lightgray", overflow:"scroll"}} onScroll={handlerScroll}>
            <div style={{height:"2000px",backgroundColor:"skyblue"}}>
            </div>
        </div>
    )
}

export default EventComponent_06