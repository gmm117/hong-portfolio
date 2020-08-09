import React, { useEffect } from 'react';
import { TileDiv, TileUl, TileItemComponentItem } from '../Utils/CommonStyle';
import { BaseURL } from '../Utils/Define';

import apps_logo from '../../../imgs/apps.png';
import study_logo from '../../../imgs/study.png';
import work_logo from '../../../imgs/work.png';

const ExperienceDatas = [
    { radius: '5px', src: apps_logo, alt: "My Apps Image", to: `${BaseURL}/Experience-Apps`, name: 'My Apps', period: '2019.12 ~ ', footname: 'Apps' },
    { radius: '5px', src: study_logo, alt: "My Study Image", to: `${BaseURL}/Experience-Study`, name: 'My Study', period: '2019.11 ~ ', footname: 'Study' },
    { radius: '5px', src: work_logo, alt: "My Work Image", to: `${BaseURL}/Experience-Work`, name: 'My Work', period: '2010 ~ ', footname: 'Work' },
];

function Experience({ location, onLocationChange }) {
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return (
        <TileDiv>
            <TileUl>
                {
                    ExperienceDatas.map(({ radius, padding, src, alt, style, to, name, product, period, footname }, index) => 
                        <TileItemComponentItem key={index} radius={radius} padding={padding} src={src} alt={alt} style={style} to={to} name={name} product={product} period={period} footname={footname} />
                    )
                }
            </TileUl>
        </TileDiv>
    );
}

export default Experience;