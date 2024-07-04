import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutText = isDarkTheme ? 'dark-about-title' : 'light-about-title'

      const aboutThemeBackground = isDarkTheme
        ? 'about-dark-theme'
        : 'about-light-theme'

      return (
        <div className={`${aboutThemeBackground}`}>
          <Navbar />
          <div className="about-icon-container">
            <div className="about-img-container">
              <img src={aboutIcon} alt="about" className="about-icon" />
              <h1 className={`${aboutText}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
