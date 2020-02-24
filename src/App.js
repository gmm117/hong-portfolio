import React, {Component, Fragment} from 'react';
import '../assets/index.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import About from './Components/About';

const Container = styled.div`
    height : 100%;
    background-color: #4686a0;
    color: rgba(255, 255, 255, 0.75);
    background-attachment: fixed, fixed, fixed;
    background-image: url(imgs/overlay2.png), url(imgs/overlay3.svg), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
    background-position: top left, center center, center center;
    background-size: auto, cover, cover;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

class App extends Component {
  render() {
      return (
        <Container>
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/about">About</Link> 
            </li>
          </ul>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Container>
      );
  }
};

export default App;
