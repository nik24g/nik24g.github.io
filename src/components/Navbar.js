import React from 'react'
// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import profile from '../images/nitin.png'
import fbIcon from '../images/facebook-icon.png'
import twiIcon from '../images/twitter-icon.png'
import linkdinIcon from '../images/linkdin-icon.png'
import gitIcon from '../images/github-icon.png'
import {contactData} from '../data/contactData'

export default function Navbar() {
    const iconHeight = "30px"
    function handleNavToggle(){
        document.getElementById("navbar-elements").classList.toggle("nav-toggle-elements")
    }
    function removeNav(){
        const element = document.getElementById("navbar-elements")
        if (element.classList.contains('nav-toggle-elements')) {
            element.classList.remove("nav-toggle-elements")
        }
    }
    return (

        <div className="nav-bar">
            <div className="personal-info">
                <div className="dp-img">
                    <img src={profile} alt="profile" />
                </div>
                <h2 className="name">{contactData.name}</h2>
            </div>

            <div className="nav-elements" id='navbar-elements'>
                <ul>
                    <NavLink to="/"  onClick={removeNav}><li>Home</li></NavLink>
                    <NavLink to="/about" onClick={removeNav}><li >About Me</li></NavLink>
                    <NavLink to="/services" onClick={removeNav}><li>What I Do</li></NavLink>
                    <NavLink to="/resume" onClick={removeNav}><li>Resume</li></NavLink>
                    <NavLink to="/projects" onClick={removeNav}><li>Projects</li></NavLink>
                    <NavLink to="/contact" onClick={removeNav}><li>Contact</li></NavLink>
                </ul>
            </div>
            <div className="nav-social-links">
                <ul>
                    <a href={contactData.facebookProfileLink} target="_blank" rel="noopener noreferrer"><li><img src={fbIcon} alt="facebook-icon" /></li></a>
                    <a href={contactData.twitterProfileLink} target="_blank" rel="noopener noreferrer"><li><img src={twiIcon} alt="twitter-icon" /></li></a>
                    <a href={contactData.githubProfileLink} target="_blank" rel="noopener noreferrer"><li><img src={gitIcon} alt="github-icon" /></li></a>
                    <a href={contactData.linkdinProfileLink} target="_blank" rel="noopener noreferrer"><li><img src={linkdinIcon} alt="linkdin-icon" /></li></a>
                </ul>
            </div>
            <div className='navbar-toggle' onClick={handleNavToggle}>
                <FontAwesomeIcon icon={faBars} style={{height: iconHeight}}/>
            </div>
        </div>
    )
}
