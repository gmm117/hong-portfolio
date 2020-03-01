import React, { Component } from 'react';
import styled from 'styled-components';

import HomeImg from '../../imgs/bg-home.jpg';

const HomeBody = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex: 1;
    font-size : 50px;
    color : black;
    height : 100%;
    background-image: url(${HomeImg});
`;
 
class Home extends Component {
    constructor(props) {
        super(props);

        const { location } = this.props;
        this.props.onLocationChange(location);
    }
    render() {
        return (
            <HomeBody>
                Challenge, Effort, Share
            </HomeBody>
        );
    }
};

export default Home;