import React, { Component } from 'react';

class Pixel extends Component {
  render() {
    const { red , green, blue, alpha} = this.props.details;
    const pixelStyle = {
      backgroundColor: `rgba(${red},${green},${blue},${alpha})`,
      height: '10px',
      width: '10px',
      margin: 0,
      padding: 0,
      border: '0.5px solid #DEDEDE',
      float: 'left',
      lineHeight: '10px',
      fontSize: '10px'
    }
    return(
        <div style={pixelStyle}></div>
    )
  }
}

export default Pixel;
