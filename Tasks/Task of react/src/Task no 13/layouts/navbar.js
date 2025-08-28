import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                <button>Let's Talk</button>
            </div>
        </nav>
    );
}

export default Navbar;
