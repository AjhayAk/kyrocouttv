import React from 'react'; import {Link} from 'react-router-dom'; const Navbar = () => { return(
<div className="navbar">
    <div className='container'>
        <nav className="navbarcontent">
            <h3 className="navbarbrand">
                <Link to="/">
                <i className="fas fa-video"></i> KYROCoutTV :)
                </Link>
            </h3>
            <ul className="navbarlinks">
                <li className="clink">
                    <Link to="/">Home</Link>
                </li>
                <li className="clink">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </div>
</div>
); }; export default Navbar;