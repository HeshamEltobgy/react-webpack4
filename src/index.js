import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import 'whatwg-fetch';
import './index.scss'

class App extends React.Component {
    render() {
       return (
        <h2>This project uses webpack 4 as a build tool for a full stack React application. It contains the advanced features that increase the performance and decrease load times which can allow the powerful development and deployment of React applications.</h2>
      )
    }
}

render (
  <App />,
  document.getElementById('root')

)
