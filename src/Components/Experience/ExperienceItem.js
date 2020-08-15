import React, { useState, useEffect } from 'react';

import ExperienceItemLayout from './ExperienceItemLayout';
import { TileDiv, TileUl } from '../utils/CommonStyle';

import { getExpInfo } from './datas/ExperienceItemInfo';
import { baseURL } from '../utils/define';

function ExperienceItem({ location, onLocationChange }) {
    let newpathname = location.pathname.replace(baseURL, "");
    const [expInfos, setExpInfos] = useState(getExpInfo(newpathname.substr(1)));

    useEffect(() => {
        onLocationChange(location);
    }, []);
    

    return(
        /* jshint ignore:start */
        <TileDiv>
            <TileUl>
                {
                    expInfos.map((expInfo, index) => <ExperienceItemLayout key={index} expInfo={expInfo} /> )
                }
            </TileUl>
        </TileDiv>
        /* jshint ignore:end */
    );
}

export default ExperienceItem;