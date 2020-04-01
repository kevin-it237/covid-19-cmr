import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.png'

class Header extends React.Component {

    render() {
        return(
            <nav className="navbar py-3">
                <div className="container">
                    <NavLink  to="/" className="navbar-brand"><img className="logo" alt="logo" src={logo} /></NavLink>
                    <ul className="ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link">Accueil <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">A propos</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;