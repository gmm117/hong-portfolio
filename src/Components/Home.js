import React, { useEffect } from 'react';
import styled from 'styled-components';

import HomeImg from '../../imgs/bg-home.jpg';
import { DeviceDirectWidth } from './utils/CommonStyle';

const HomeBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 50px;
    color: #008073;
    height: 100%;
    background: url(${HomeImg}) no-repeat center center;
    background-size: cover;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '320px', max: '399px'})} {
        font-size: 20px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '400px', max: '520px'})} {
        font-size: 30px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '521px', max: '767px'})} {
        font-size: 40px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        font-size: 50px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        font-size: 60px;
    }
`;

function Home({ location, onLocationChange }) {
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return (
        /* jshint ignore:start */
        <HomeBody>
            Challenge, Effort, Share
        </HomeBody>
        /* jshint ignore:end */
    );
}

 
export default Home;