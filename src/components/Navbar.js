import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = props => {
    return(
        <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/events">
      <img src={require('/Users/ashley/Queer Community App/Queer Community App Frontend/queer-community-app-frontend/src/Untitled.png')} width="30" height="30" alt = "unicorn logo"/>
      gayety
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <button className = 'button' onClick = {props.logout}>Log Out</button>

  <div id="navbarBasicExample" className="navbar-menu">

    <div className="navbar-end">
        <div className = 'navbar-item'>
            <NavLink className = 'navbar-item' to = "/profile">
                <p>Profile</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/events">
                <p>Events</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/calendar">
                <p>Calendar</p>
                <p className = 'is-size-7 nav-coming-soon'>Coming Soon</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/chat">
                <p>Chat</p>
                <p className = 'is-size-7 nav-coming-soon'>Coming Soon</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/safespaces">
                <p>Safe Spaces</p>
                <p className = 'is-size-7 nav-coming-soon'>Coming Soon</p>
            </NavLink>
        </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar