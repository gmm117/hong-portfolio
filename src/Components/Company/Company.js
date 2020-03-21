import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { LinkStyle, TileDiv, TileUl, TileItemLi, TileThumbDiv, TileThumbHoverDiv, TileThumbHoverDivItem, TileThumbItemDiv, TileThumbImg } from '../Utils/CommonStyle';
import { BaseURL } from '../Utils/Define';

import bluebirdlogo from '../../../imgs/bluebirdsoft_logo.png';
import hancom_logo from '../../../imgs/hancom_logo.png';
import osstem_logo from '../../../imgs/osstem_logo.png';


class Company extends Component {
    constructor(props) {
        super(props);

        const { location } = this.props;
        this.props.onLocationChange(location);
    }

    render() {
        return (
            <TileDiv>
                <TileUl>
                    <TileItemLi>
                        <TileThumbDiv>
                            <TileThumbImg src={hancom_logo} alt="Hancom Group Logo" />
                            <TileThumbHoverDiv>
                                <Link style={LinkStyle} to={`${BaseURL}/Company-Hancom`} >
                                    <TileThumbHoverDivItem>
                                        <div>한글과컴퓨터</div>
                                        <div>웹한글/웹한글기안기</div>
                                        <div>2016.12 ~ </div>
                                    </TileThumbHoverDivItem>
                                </Link>
                            </TileThumbHoverDiv>
                        </TileThumbDiv>
                        <TileThumbItemDiv>한글과컴퓨터</TileThumbItemDiv>
                    </TileItemLi>
                    <TileItemLi>
                        <TileThumbDiv padding={'35px'}>
                            <TileThumbImg src={osstem_logo} alt="Osstem Implant Logo" />
                            <TileThumbHoverDiv>
                                <Link style={LinkStyle} to={`${BaseURL}/Company-OsstemImplant`} >
                                    <TileThumbHoverDivItem>
                                        <div>오스템임플란트</div>
                                        <div>치과용 프로그램</div>
                                        <div>2013.04 ~ 2016.12</div>
                                    </TileThumbHoverDivItem>
                                </Link>
                            </TileThumbHoverDiv>
                        </TileThumbDiv>
                        <TileThumbItemDiv>오스템임플란트</TileThumbItemDiv>
                    </TileItemLi>
                    <TileItemLi>
                        <TileThumbDiv padding={'45px'}>
                            <TileThumbImg src={bluebirdlogo} alt="Bluebird Logo" />
                            <TileThumbHoverDiv>
                                <Link style={LinkStyle} to={`${BaseURL}/Company-Bluebird`} >
                                    <TileThumbHoverDivItem>
                                        <div>블루버드소프트</div>
                                        <div>산업용 PDA개발</div>
                                        <div>2010.06 ~ 2012.04</div>
                                    </TileThumbHoverDivItem>
                                </Link>
                            </TileThumbHoverDiv>
                        </TileThumbDiv>
                        <TileThumbItemDiv>블루버드소프트</TileThumbItemDiv>
                    </TileItemLi>
                </TileUl>
            </TileDiv>
        );
    }
};

export default Company;