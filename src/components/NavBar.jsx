import React from 'react'

const NavBar = () => {
  return (
    <header>
        {/* Menu Button */}
        <img src="./menu.svg" alt="open menu" />

        {/* Logo */}
        <img src="./logo.svg" alt="open menu" />

        {/* Navigation Box */}
        <NavBox />

        {/* cart icon */}
        <img src="./cart.svg" alt="view cart" />

        {/* user profile image */}
        <img src="./avatar.png" alt="profile image" />

        {/* testing something */}
    </header>
  )
}

export default NavBar;