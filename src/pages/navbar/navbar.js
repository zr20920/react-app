import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => (
  <div className="tabbar">
    <NavLink className="tabber-item" exact to="/">Home</NavLink>
    <NavLink className="tabber-item" to="/about">About</NavLink>
  </div>
)

export default NavBar
