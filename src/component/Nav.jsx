import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './nav.css'
export default function Nav() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToSignin = () => {
    navigate('/signin');
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <Link className="cinecraft navbar-brand text-dark m" to="/">CINECRAFT</Link>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="home nav-link text-dark mx-2" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="home nav-link text-dark mx-2" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="assistant nav-link text-dark" to="/assistant">Assistant</Link>
        </li>
      </ul>
    </div>
    <button type="button" onClick={navigateToLogin} className="button1 mx-2">Login</button>
    <button type="button" onClick={navigateToSignin} className="button2">Sign Up</button>
  </div>
</nav>
  )
}
