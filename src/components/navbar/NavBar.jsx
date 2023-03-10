import React from 'react'
import './navBar.css'

export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className='logo'>LamaBooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}
