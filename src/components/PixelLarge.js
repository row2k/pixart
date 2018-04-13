import React, { Component } from 'react';


class PixelLarge extends Component {
  componentDidMount(){
    this.setState({
      currentColor: this.props.currentColor
    })
  }
  handleMouseDown = (e) => {
    let targetColor = `rgba(${this.props.currentColor.red},${this.props.currentColor.green},${this.props.currentColor.blue},1)`
    //set css color
    this._pixel.style.backgroundColor = targetColor;
    //set data
    let newState = {
      red: `${this.props.currentColor.red}`,
      green: `${this.props.currentColor.green}`,
      blue: `${this.props.currentColor.blue}`,
      alpha: 1
    }
    console.log(newState);
    let targetId = this.props.id
    this.setState(newState);
    this.props.callbackParent(newState, targetId);
  }

  render() {
    const { red , green, blue, alpha} = this.props.details;
    const pixelLargeStyle = {
      backgroundColor: `rgba(${red},${green},${blue},${alpha})`,
      height: '20px',
      width: '20px',
      margin: 0,
      padding: 0,
      border: '0.5px solid #DEDEDE',
      float: 'left',
      lineHeight: '20px',
      fontSize: '20px'
    }
    return(
        <div ref={c => this._pixel = c} id={this.props.id} onMouseDown={this.handleMouseDown} onDragOver={this.handleMouseDown} style={pixelLargeStyle}></div>
    )
  }
}

export default PixelLarge;
