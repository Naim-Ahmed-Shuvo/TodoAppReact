import React, { Component } from 'react';
import './style.css'
import {Link} from 'react-router-dom';
class Nav extends Component {
    render() {
        const  navStyle = {
            color: "White",
            listStyle: "none",
        }
        
        return (
            <div>
                <nav>
                    <h5>Logo</h5>
                    <ul>
                        <li><Link style={navStyle} to="/">Home</Link></li>
                        <li><Link style={navStyle} to="/about">About</Link></li>
                        <li><Link style={navStyle} to="/Contact">Contact</Link></li>
                        
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;