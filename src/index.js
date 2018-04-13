import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { withRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import './css/style.css';
import App from './App';

// let store = createStore(todoApp)

class Root extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 300);
  }
  render() {
    const { loading } = this.state;
    if(loading) {
      return null;
    }
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

render(<Root/>, document.getElementById('main'));
