import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundTheme = isDarkTheme
        ? 'notFound-dark-theme'
        : 'notFound-light-theme'

      const notFoundLostTheme = isDarkTheme
        ? 'lost-dark-theme'
        : 'lost-light-theme'

      const notFoundDesThem = isDarkTheme ? 'des-dark-theme' : 'des-light-theme'

      return (
        <div className={`${notFoundTheme}`}>
          <Navbar />
          <div className="notFound-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={`${notFoundLostTheme}`}>Lost Your Way?</h1>
            <p className={`${notFoundDesThem}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
