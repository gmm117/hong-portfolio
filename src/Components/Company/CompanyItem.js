import React, { useState, useEffect } from 'react';

import CompItemLayout from './CompItemLayout';
import { ItemUl } from '../utils/CommonStyle';

import { getCompInfo } from './datas/compInfo';
import { baseURL } from '../utils/define';

function CompanyItem({ location, onLocationChange }) {
    let newpathname = location.pathname.replace(baseURL, "");
    const [compInfos, setCompInfos] = useState(getCompInfo(newpathname.substr(1)));
    
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return(
        /* jshint ignore:start */
        <ItemUl>
            {
                compInfos.map((compInfo, index) => <CompItemLayout key={index} compInfo={compInfo} /> )
            }
        </ItemUl>
        /* jshint ignore:end */
    );
};

export default CompanyItem;