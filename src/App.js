import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import DataCollection from './pages/DataCollection'
import MeetTheTeam from './pages/MeetTheTeam'
import ScrollToTop from './utils/ScrollToTop'
import DataVisualization from './pages/DataVisualization'
import Modal from 'react-modal'
import AllShows from './pages/AllShows'
import AboutUgsrp from './pages/AboutUgsrp'
import VisualizerMenu from './graphs/VisualizerMenu'
import VisualizerAQ from './graphs/VisualizerAQ'
import VisualizerNQ from './graphs/VisualizerNQ'

require('dotenv').config()

Modal.setAppElement('#root') //Necessary for settings modal

export const AuthContext = React.createContext()

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setLoggedInUser(user)
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          loggedInUser,
          setLoggedInUser: setUser,
        }}
      >
        <Router>
          <ScrollToTop />
          <Switch>
            {/* TODO: Add a way to view a list of all shows, much like my-shows but for non logged in users */}

            <Route path="/all-shows">
              <AllShows />
            </Route>
            <Route path="/data-collection">
              <DataCollection />
            </Route>
            <Route path="/data-visualization">
              <DataVisualization />
            </Route>
            <Route path="/meet-the-team">
              <MeetTheTeam />
            </Route>
            <Route path="/about-ugsrp">
              <AboutUgsrp />
            </Route>
            <Route path="/visualizer">
              <VisualizerMenu />
            </Route>
            <Route path="/visualizer-aq">
              <VisualizerAQ />
            </Route>
            <Route path="/visualizer-nq">
              <VisualizerNQ />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
