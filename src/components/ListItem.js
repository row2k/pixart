import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    return(
      <a className="listItem paper col-xs-10 col-sm-10 col-md-10 col-lg-10" id={this.props.id} href={"/canvas/"+ this.props.details}>
          {this.props.details}
      </a>
    )
  }
}

export default ListItem;
