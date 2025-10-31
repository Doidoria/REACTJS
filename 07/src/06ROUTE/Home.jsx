import { Link } from 'react-router-dom';

const Home = ()=>{

    return (
        <div>
            <h1>HOME PAGE</h1>
            <div>
                <ul className='pagebtn'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about?name=timo&age=100">ABOUT_1</Link></li>
                    <li><Link to="/about?name=timo&age=50">ABOUT_2</Link></li>
                    <li><Link to="/contact/jung/40">CONTACT</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home