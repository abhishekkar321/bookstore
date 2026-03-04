import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Navbar = () => {
return (
<nav className="navbar">
<h2 className="logo">📚 BookStore</h2>
<ul className="nav-links">
<li><Link to="/">Home</Link></li>
<li><Link to="/books">Books</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/login">Login</Link></li>
</ul>
</nav>
);
};


export default Navbar;