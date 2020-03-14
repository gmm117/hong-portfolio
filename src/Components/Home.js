import React, { useEffect } from 'react';
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
    background: url(${HomeImg}) no-repeat center center;
    background-size : cover;
`;

function Home( { location, onLocationChange } ) {
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return (
        <HomeBody>
            Challenge, Effort, Share
        </HomeBody>
    );
}
 
export default Home;