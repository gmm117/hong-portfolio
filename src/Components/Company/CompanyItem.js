import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BaseURL } from '../Utils/Define';
import { GetCompInfo } from './datas/CompInfo';
import CompLayout from './datas/CompLayout';

const CompUl = styled.ul`
    width : 100%;
    max-width: 1000px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin: 0 auto;
    flex-direction : column;
    box-sizing: border-box;
    padding: 20px;  

    li + li {
        margin-top : 20px;
    }
`;

function CompanyItem( {location, onLocationChange} ) {
    let newpathname = location.pathname.replace(BaseURL, "");
    const [compInfos, setCompInfos] = useState(GetCompInfo(newpathname.substr(1)));
    
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return(
        <CompUl>
            {
                compInfos.map((compInfo, index) => <CompLayout key={index} compInfo={compInfo} /> )
            }
        </CompUl>
    );
};

export default CompanyItem;