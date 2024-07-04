import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeText = isDarkTheme ? 'dark-title-home' : 'light-title-home'

      const themeBackground = isDarkTheme
        ? 'dark-bg-container'
        : 'light-bg-container'

      return (
        <div className={`${themeBackground}`}>
          <Navbar />
          <div className="home-icon-container">
            <div className="home-img-container">
              <img src={homeIcon} alt="home" className="home-icon" />
              <h1 className={`${homeText}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
