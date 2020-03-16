import React, { useState } from 'react';
import styled from 'styled-components';

import { BaseURL } from '../Utils/Define';
import { GetCompInfo } from './datas/CompInfo';
import CompItem from './datas/CompItem';


const CompUl = styled.ul`
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

function CompProject( {location, onLocationChange} ) {
    let newpathname = location.pathname.replace(BaseURL, "");
    const [compInfos, setCompInfos] = useState(GetCompInfo(newpathname.substr(1)));
    
    onLocationChange(location);

    return(
        <CompUl>
            {
                compInfos.map((compInfo, index) => <CompItem key={index} compInfo={compInfo} /> )
            }
        </CompUl>
    );
};

export default CompProject;