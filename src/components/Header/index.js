import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="header-img"
      />
      <h1 className="home1">Wave</h1>
    </div>
    <ul className="nav-elements">
      <li>
        <Link className="home" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="home" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="home" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
