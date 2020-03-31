import React, { useEffect } from 'react';
import styled from 'styled-components';

import HomeImg from '../../imgs/bg-home.jpg';

const HomeBody = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    font-weight : 600;
    font-size : 50px;
    color : #2b8a3e;
    height : 100%;
    background: url(${HomeImg}) no-repeat center center;
    background-size : cover;

    /* Mobile Device */
    @media screen and (min-width : 320px) and (max-width : 399px) {
        font-size : 20px;
    }

    /* Mobile Device */
    @media screen and (min-width : 400px) and (max-width : 520px) {
        font-size : 30px;
    }

    /* Mobile Device */
    @media screen and (min-width : 521px) and (max-width : 767px) {
        font-size : 40px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size : 50px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size : 60px;
    }
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