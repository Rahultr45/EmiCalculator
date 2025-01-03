import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/aboutUs"></Link>
    </nav>
  )
}

export default Navbar;