import { Link, useParams } from "react-router-dom"

const Contact = ()=>{
    const {name, age} = useParams()
    console.log(name,age)

    return (
        <div>
            <h1>CONTACT PAGE</h1>
            <Link to='/'>HOME</Link>
        </div>
    )
}

export default Contact