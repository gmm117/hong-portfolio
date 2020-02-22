import React, {Component, Fragment} from 'react';
import '../assets/index.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import styled from 'styled-components';

class App extends Component {
  render() {
      return (
        <Fragment>
          <Header />
          <Home />
        </Fragment>
          
      );
  }
};

export default App;
