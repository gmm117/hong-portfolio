import React, { useState, useEffect } from 'react';
import { TileDiv, TileUl } from '../Utils/CommonStyle';
import { GetExpInfo } from './datas/ExperienceItemInfo';
import ExperienceItemLayout from './datas/ExperienceItemLayout';
import { BaseURL } from '../Utils/Define';

function ExperienceItem( { location, onLocationChange } ) {
    let newpathname = location.pathname.replace(BaseURL, "");
    const [expInfos, setExpInfos] = useState(GetExpInfo(newpathname.substr(1)));

    useEffect(() => {
        onLocationChange(location);
    }, []);
    

    return(
        <TileDiv>
            <TileUl>
                {
                    expInfos.map((expInfo, index) => <ExperienceItemLayout key={index} expInfo={expInfo} /> )
                }
            </TileUl>
        </TileDiv>
    );
};

export default ExperienceItem;