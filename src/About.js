import React, { Component } from 'react';
//import PropTypes from 'prop-types'; //preferred method ^React@15.5

export default class About extends Component {
  render() {
    return(
          <div className="paper col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <div className="textWrap">
              <h2>About</h2>
              <p>Pixart is a simple app that lets you draw in 16x16 pixels. What is fun about it is that it is back by firebase's realtime database.So your drawing is saved automatically and almost(almost) instantaneously. It's made with:</p>
              <ul>
                <li>Create React App</li>
                <li>React 16</li>
                <li>React Router 4</li>
                <li>Stylus</li>
                <li>Firebase with re-base library</li>
              </ul>
              <h2>Next</h2>
              <p>This is a working demo, couple to-dos:</p>
              <ul>
                <li>Avoid props drilling with Redux</li>
                <li>Add stroke event (mousedown && mouseover)</li>
                <li>Responsive sizes are a little messed up. Unresponsive patch for now. Thanks to <a href="https://github.com/jschiarizzi">@jschiarizzi</a> for the flag.</li>
              </ul>
              <h2>Me</h2>
              <p>Hi, I'm Rowland. I'm glad you're here! Head on over to my <a href="https://github.com/row2k">github repo</a> to see my other work or get in touch with me.</p>
            </div>
          </div>

    );
  }
}
