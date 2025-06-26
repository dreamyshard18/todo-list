import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
           
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
            </nav>
        </header>
    )
}

export default Navbar;