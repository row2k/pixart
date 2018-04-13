import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Router } from 'react-router';
import PixelLarge from './components/PixelLarge';
import hexRgb from 'hex-rgb';
import blankCanvasTest from './components/blankCanvasTest'
import rebase from './rebase' //rebase for react binding, use base for vanilla firebase

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pixels: {},
      currentColor: "#000000"
    };
  }
  handleColorChange = (e) => {
    e.preventDefault();
    let convertColor = hexRgb(`${e.target.value}`)
    this.setState({currentColor: convertColor});
    console.log(e.target.value);
  }
  handlePixelChange = (newState, targetId) => {
    this.setState({
      pixels: {
        [targetId]: newState
      }
    });
  }
  // handlePixelMouseDown = (e) => {
  //   e.currentTarget.style.backgroundColor = this.state.currentColor;
  // }
  componentWillMount() {
    //this runs right before the <App> is rendered
    this.ref= rebase.syncState(
      `${this.props.match.params.canvasId}/pixels`,
      { context: this, state: 'pixels'}
    );
  }
  componentDidMount(){
    rebase.fetch(`${this.props.match.params.canvasId}/pixels`,{
      context: this,
      asArray: true
    }).then(data =>{
      if(!data[0]) {
        this.setState({
          pixels: blankCanvasTest,
          currentColor: "#000000"
        });

      }
      else {
        console.log(data);
        this.setState({
          pixels: data,
          currentColor: "#000000"
        });
      }
    }).catch(error => {
      console.log(error);
      return;
    })
  }
  componentWillUnmount() {
    rebase.removeBinding(this.ref);
  }
  render() {
    return (
      <div>
        <form className="colorPicker">
          <label>Choose Color =></label>
          <input type="color" value={this.state.value} onChange={this.handleColorChange} />

        </form>
        <div className="sizeMessage">
          Ohh nooo!! Your browser is narrower than 600px. Please switch over to a larger screen.
        </div>
        <div className="app-wrapper paper canvas">
          {
            Object
            .keys(this.state.pixels)
            .map(key=><PixelLarge currentColor={this.state.currentColor} key={key} index={key} id={key} details={this.state.pixels[key]} callbackParent={this.handlePixelChange}/>)
          }
        </div>
        <p className="initializeMessage">Canvas may take up to 5s to initialize.</p>
      </div>
    );
  }
}

export default Canvas;
