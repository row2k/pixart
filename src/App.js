import React, { Component } from 'react';
//import PropTypes from 'prop-types'; //preferred method ^React@15.5
import { Route, Switch, Link } from 'react-router-dom';


import Landing from './Landing';
import Canvas from './Canvas';
import About from './About';
import List from './List';
import NotFound from './NotFound';

import iconAdd from './css/images/add.svg';
import iconList from './css/images/tag.svg';
import iconAbout from './css/images/heart.svg';

export default class App extends Component {
  render() {
    return(
      <div className="root">
        <div className="header"><h1>Pixart</h1></div>
        <div className="nav">
          <Link className="navLink" to='/'>
          <img src={iconAdd} alt="Create"/>Create</Link>
          <Link className="navLink" to='/canvases'><img src={iconList} alt="Create"/>Canvases</Link>
          <Link className="navLink" to='/about'><img src={iconAbout} alt="Create"/>About</Link>
        </div>
        <div className="appWrapper fullScreenFlexCenter">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/canvas/:canvasId' component={Canvas} />
            <Route exact path='/canvases' component={List} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="footer">
          Made with ❤️ in Washington DC by <a href="https://github.com/row2k">@row2k.</a> Icons designed by Chanut from Flaticon
        </div>
      </div>
    );
  }
}
