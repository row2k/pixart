import React, { Component } from 'react';
//import PropTypes from 'prop-types'; //preferred method ^React@15.5
import rebase from './rebase';
import ListItem from './components/ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvases: []
    };
  }
  componentDidMount(){
    rebase.fetch( `/`,{
      context: this,
      asArray: true
    }).then(data =>{
      this.setState({
        canvases: data
      });
      console.log(this.state.canvases);
      console.log(this.state.canvases[0].key);
    }).catch(error => {
      console.log(error);
      return;
    })
  }
  render() {
    return(
      <div className="app-wrapper">
        <div className="row full-page-section origin center-xs">
            <div className="listTitle">Here are all the canvases everyone created.</div>
            {
              Object
              .keys(this.state.canvases)
              .map((item,i) => <ListItem key={i} index={i} id={i} details={this.state.canvases[i].key} />)
            }
        </div>
      </div>
    );
  }
}
