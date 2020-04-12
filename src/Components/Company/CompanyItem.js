import React, { useState, useEffect } from 'react';

import { BaseURL } from '../Utils/Define';
import { GetCompInfo } from './datas/CompInfo';
import CompLayout from './datas/CompLayout';
import { ItemUl } from '../Utils/CommonStyle';

function CompanyItem( {location, onLocationChange} ) {
    let newpathname = location.pathname.replace(BaseURL, "");
    const [compInfos, setCompInfos] = useState(GetCompInfo(newpathname.substr(1)));
    
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return(
        <ItemUl>
            {
                compInfos.map((compInfo, index) => <CompLayout key={index} compInfo={compInfo} /> )
            }
        </ItemUl>
    );
};

export default CompanyItem;