import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import headerImage from './header_nl.gif'
import './App.css'
import Home from './Home'
import Cards from './Cards'
import Order from './Order'
import About from './About'
import Contact from './Contact'
// import NavLink from './NavLink'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <img src={headerImage} alt="logo" />
          </header>
          <nav>
            <ul>
              <li><NavLink to="/home">HOME</NavLink></li>
              <li><NavLink to="/cards">kaartjes</NavLink></li>
              <li><NavLink to="/order">bestellen</NavLink></li>
              <li><NavLink to="/about">over Sky & Lucy</NavLink></li>
              <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/cards" component={Cards} />
            <Route path="/order" component={Order} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
