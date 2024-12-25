//src/components/Header.js

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/flower-product">Flower Products</NavLink>
    </nav>
  </header>
)
export default Header
