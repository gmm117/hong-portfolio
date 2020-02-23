import React, { Component } from 'react';
import styled from 'styled-components';

const HomeBody = styled.div`
    font-size : 50px;
    color : white;
    flex: 1;
    display : flex;
    justify-content : center;
    align-items : center;
`;

class Home extends Component {
    render() {
        return (
            <HomeBody>
                Challenge, Effort, Share
            </HomeBody>
        );
    }
};

export default Home;