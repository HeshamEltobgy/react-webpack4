import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import 'whatwg-fetch';
import './index.scss'

class App extends React.Component {
    render() {
       return (
        <p>Hello React!</p>
      )
    }
}

render (
  <App />,
  document.getElementById('root')

)
