import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getFunName } from './tools'
// import { Link } from 'react-router-dom';
class Landing extends Component {
  constructor() {
    super();
    this.goToCanvas = this.goToCanvas.bind(this);
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  goToCanvas = (e) => {
    e.preventDefault();
    const canvasId = this.canvasInput.value;
    this.props.history.push(`/canvas/${canvasId}`);
  }

  render() {
    return(
      <div className='row center-xs'>
        <div className='paper col-xs-12 col-sm-10'>
          <form className="formEdit" onSubmit={(e) => this.goToCanvas(e)}>
            <h2>Name the Canvas</h2>
            <input type="text" required placeholder="Canvas Name" defaultValue={getFunName()} ref={(input) =>{this.canvasInput = input}} />
            <button type="submit">Start!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Landing;
