import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <h1 className="header__title">Guy & Gal Travel</h1>
        </header>
        <nav className="nav">
          <Link className="nav__link" to="/">
            Home
          </Link>
          <Link className="nav__link" to="/about/">
            About
          </Link>
          <Link className="nav__link" to="#">
            Blog
          </Link>
          <Link className="nav__link" to="#">
            Recipes
          </Link>
          <Link className="nav__link" to="#">
            Contact
          </Link>
        </nav>
      </>
    )
  }
}

export default Header
