import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProcessUl = styled.ul`
    width : 100%;
    max-width: 1000px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin: 0 auto;
    flex-direction : column;
    padding : 10px;
    box-sizing: border-box;  

    li + li {
        padding-top : 20px;
    }
`;

function ProcessItem( {location, onLocationChange} ) {
    useEffect(() => {
        onLocationChange(location);
    }, []);
    

    return(
        <div>준비중입니다.</div>
        // <ProcessUl>
            
        // </ProcessUl>
    );
};

export default ProcessItem;