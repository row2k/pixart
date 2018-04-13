import React, { Component } from 'react';
//import PropTypes from 'prop-types'; //preferred method ^React@15.5

export default class NotFound extends Component {
  render() {
    return(
      <div className="app-wrapper">
        <div className="row full-page-section origin">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 center-xs">
            <div className='tagline'>Error 404: We can't find the page you're looking for. </div>
          </div>
        </div>
      </div>
    );
  }
}
