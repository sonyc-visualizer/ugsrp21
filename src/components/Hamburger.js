import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const Hamburger = (props) => {
  const { loggedInUser, setLoggedInUser } = React.useContext(AuthContext)
  return (
    <Menu {...props}>
      <Link to="/Home" id="home" className="menu-item">
        About SONYC
      </Link>
      <Link to="/about-ugsrp" className="menu-item">
        About SONYC UGSRP'21
      </Link>
      <Link to="/data-collection" className="menu-item">
        Data Collection and Analysis
      </Link>
      <Link to="/data-visualization" className="menu-item">
        Data Visualization Research
      </Link>
      <Link to="/visualizer" className="menu-item">
        Visualizer Interface
      </Link>

      <Link to="/meet-the-team" id="Meet-the-team" className="menu-item">
        Meet the Team
      </Link>
    </Menu>
  )
}
export default Hamburger
