import React, { useState, useEffect } from 'react';

import ExperienceItemLayout from './ExperienceItemLayout';
import { TileDiv, TileUl } from '../styles/CommonStyle';

import experience from '../../datas/experience';
import { baseURL } from '../../datas/utils/define';

function ExperienceItem({ location, onLocationChange }) {
    const { getExpInfo } = experience;
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