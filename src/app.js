import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, IndexLink , hashHistory, browserHistory } from 'react-router';
import About from './about';
import Home from './home';
import Explore from './explore';
import Contact from './contact';




class App extends Component {
render() {
  return (
    <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='explore' component={Explore} />
          <Route path='contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Route>
    </Router>
  )
}
}

const Nav = () => (
  <div className="topnav" id="myTopnav">
    <IndexLink className="link" activeClassName='active' to='/'>Home</IndexLink>
    <IndexLink className="link" activeClassName='active' to='/about'>About</IndexLink>
    <IndexLink className="link" activeClassName='active' to='/explore'>Explore</IndexLink>
    <IndexLink className="link" activeClassName='active' to='/contact'>Contact</IndexLink>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


export default App
