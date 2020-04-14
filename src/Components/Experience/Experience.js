import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LinkStyle, TileDiv, TileUl, TileItemLi, TileThumbDiv, TileThumbHoverDiv, TileThumbHoverDivItem, TileThumbItemDiv, TileThumbImg } from '../Utils/CommonStyle';
import { BaseURL } from '../Utils/Define';

import apps_logo from '../../../imgs/apps.png';
import study_logo from '../../../imgs/study.png';
import work_logo from '../../../imgs/work.png';

function Experience({ location, onLocationChange }) {
    useEffect(() => {
        onLocationChange(location);
    }, []);

    return (
        <TileDiv>
            <TileUl>
                <TileItemLi>
                    <TileThumbDiv radius={'5px'}>
                        <TileThumbImg radius={'5px'} src={apps_logo} alt="My Apps Image" />
                        <TileThumbHoverDiv>
                            <Link style={LinkStyle} to={`${BaseURL}/Experience-Apps`} >
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
                    <TileThumbDiv radius={'5px'}>
                        <TileThumbImg radius={'5px'} src={study_logo} alt="My Study Image" />
                        <TileThumbHoverDiv>
                            <Link style={LinkStyle} to={`${BaseURL}/Experience-Study`} >
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
                    <TileThumbDiv radius={'5px'}>
                        <TileThumbImg radius={'5px'} src={work_logo} alt="My Work Image" />
                        <TileThumbHoverDiv>
                            <Link style={LinkStyle} to={`${BaseURL}/Experience-Work`} >
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

export default Experience;