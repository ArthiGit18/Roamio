import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import '../theme.css'
import { NavLink } from 'react-router-dom'

const NavItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Customer Care", path: "/customer-care" },
]

const Nav = () => {
  return (
   <div className='nav'>
      <div className="nav-logo">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div className="nav-links">
        {NavItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="nav-theme">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Nav