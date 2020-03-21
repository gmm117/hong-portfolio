import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { LinkStyle, TileDiv, TileUl, TileItemLi, TileThumbDiv, TileThumbHoverDiv, TileThumbHoverDivItem, TileThumbItemDiv, TileThumbImg } from '../Utils/CommonStyle';
import { BaseURL } from '../Utils/Define';

import apps_logo from '../../../imgs/apps.svg';
import study_logo from '../../../imgs/study.svg';
import work_logo from '../../../imgs/work.svg';

function Process({ location, onLocationChange }) {
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return (
        <TileDiv>
            <TileUl>
                <TileItemLi>
                    <TileThumbDiv style={{background: '#f6f6f6', border: '2px solid gray'}}  padding={'60px'}>
                        <TileThumbImg src={apps_logo} alt="My Apps Image" />
                        <TileThumbHoverDiv>
                            <Link style={LinkStyle} to={`${BaseURL}/Process-Apps`} >
                                <TileThumbHoverDivItem>
                                    <div>My Apps</div>
                                    <div>2019.12 ~ </div>
                                </TileThumbHoverDivItem>
                            </Link>
                        </TileThumbHoverDiv>
                    </TileThumbDiv>
                    <TileThumbItemDiv>Apps</TileThumbItemDiv>
                </TileItemLi>
                <TileItemLi>
                    <TileThumbDiv style={{background: '#f6f6f6', border: '2px solid gray'}} padding={'60px'}>
                        <TileThumbImg src={study_logo} alt="My Study Image" />
                        <TileThumbHoverDiv>
                            <Link style={LinkStyle} to={`${BaseURL}/Process-Study`} >
                                <TileThumbHoverDivItem>
                                    <div>My Study</div>
                                    <div>2019.11 ~ </div>
                                </TileThumbHoverDivItem>
                            </Link>
                        </TileThumbHoverDiv>
                    </TileThumbDiv>
                    <TileThumbItemDiv>Study</TileThumbItemDiv>
                </TileItemLi>
                <TileItemLi>
                    <TileThumbDiv style={{background: '#f6f6f6', border: '2px solid gray'}} padding={'60px'}>
                        <TileThumbImg src={work_logo} alt="My Work Image" />
                        <TileThumbHoverDiv>
                            <Link style={LinkStyle} to={`${BaseURL}/Process-Work`} >
                                <TileThumbHoverDivItem>
                                    <div>My Work</div>
                                    <div>2010 ~ </div>
                                </TileThumbHoverDivItem>
                            </Link>
                        </TileThumbHoverDiv>
                    </TileThumbDiv>
                    <TileThumbItemDiv>Work</TileThumbItemDiv>
                </TileItemLi>
            </TileUl>
        </TileDiv>
    );
}

export default Process;