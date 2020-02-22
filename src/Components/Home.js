import React, { Component } from 'react';
import styled from 'styled-components';

const HomeBody = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: #4686a0;
    color: rgba(255, 255, 255, 0.75);
    background-attachment: fixed, fixed, fixed;
    background-image: url(imgs/overlay2.png), url(imgs/overlay3.svg), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
    background-position: top left, center center, center center;
    background-size: auto, cover, cover;
    overflow: hidden;
    height : 95vh;
    font-size : 50px;
 `;

class Home extends Component {
    render() {
        return (
            <HomeBody>Challenge, Effort, Share</HomeBody>
        );
    }
};

export default Home;