import {Link} from "react-router-dom"

const Nav = ()=>{
    return (
        <nav>
            <Link to="/">HOME</Link><br></br>
            <Link to="/about">ABOUT</Link>
        </nav>
    )
}
export default Nav