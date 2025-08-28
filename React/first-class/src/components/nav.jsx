import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className='Nav'>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/main">Buttons</Link></li>
                 <li><Link to="/Post">Post</Link></li>
            </ul>
        </div>
    )
}

export default Navbar