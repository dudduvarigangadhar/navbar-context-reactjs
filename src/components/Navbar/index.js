import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const changeThemeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarThemeContainer = isDarkTheme
        ? 'navbar-dark-bg'
        : 'navbar-light-bg'

      const navbarTextTheme = isDarkTheme
        ? 'navbar-dark-text'
        : 'navbar-light-text'

      return (
        <div className={`${navbarThemeContainer} navbar`}>
          <div className="navbar-container">
            <img src={themeIcon} alt="website logo" className="theme-logo" />
            <ul className="navbar-routes-container">
              <Link to="/" className="nav-route-container">
                <li className={`${navbarTextTheme}`}>Home</li>
              </Link>
              <Link to="/about" className="nav-route-container">
                <li className={`${navbarTextTheme}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              data-testid="theme"
              onClick={onToggleTheme}
              className="theme-button"
            >
              <img src={changeThemeIcon} alt="theme" className="theme-logo" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
