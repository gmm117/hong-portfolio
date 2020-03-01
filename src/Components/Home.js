import React, { Component } from 'react';
import styled from 'styled-components';

const HomeBody = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex: 1;
    font-size : 50px;
    color : black;
    height : 100%;
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