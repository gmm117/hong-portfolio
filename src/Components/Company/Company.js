import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { LinkStyle } from '../Utils/CommonStyle';
import { BaseURL } from '../Utils/Define';

import bluebirdlogo from '../../../imgs/bluebirdsoft_logo.png';
import hancom_logo from '../../../imgs/hancom_logo.png';
import osstem_logo from '../../../imgs/osstem_logo.png';

const CompanyDiv = styled.div`
    display : flex;
    flex: 1;
    height : 100%;
`;

const ListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    color: #333;
    padding : 0px 25px;
    font-family: Noto Sans Medium,AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
`;

const ListItemLi = styled.li`
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 76px 14px 0;
    text-align: center;
    margin: 0 auto;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        height: 150px;
        min-height: 150px;
        width: 220px;
        min-width: 220px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 180px;
        min-height: 180px;
        width: 250px;
        min-width: 250px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 210px;
        min-height: 210px;
        width: 280px;
        min-width: 280px;
    }
`;

const ThumbDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 10px 0px;
    cursor: pointer;
    padding : ${props => (props.padding ? props.padding : '0px')};
    box-sizing: border-box;
    box-shadow: 0 1px 15px rgba(0,21,41,0.08);

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        height: 150px;
        min-height: 150px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 180px;
        min-height: 180px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 210px;
        min-height: 210px;
    }
`;

const ThumbHoverDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height : 100%;
    width : 100%;
    background : rgba(0, 0, 0, 0);
    opacity: 0;
    &:hover {
        background : rgba(0, 0, 0, 0.7);
        opacity : 1;
    }
`;

const ThumbHoverDivItem = styled.div`
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    height : 100%;
    font-size : 14px;
    color : white;
    font-weight : 800;

    div + div {
        margin-top : 10px;    
    }
`;

const ThumbItemDiv = styled.div`
    width: 100%;
    font-weight: 600;
`;

const ThumbImg = styled.img`
    width: 100%;
    height: 100%;
`;

class Company extends Component {
    constructor(props) {
        super(props);

        const { location } = this.props;
        this.props.onLocationChange(location);
    }

    render() {
        return (
            <CompanyDiv>
                <ListUl>
                    <ListItemLi>
                        <ThumbDiv>
                            <ThumbImg src={hancom_logo} alt="Hancom Group Logo" />
                            <ThumbHoverDiv>
                                <Link style={LinkStyle} to={`${BaseURL}/Company-Hancom`} >
                                    <ThumbHoverDivItem>
                                        <div>한글과컴퓨터</div>
                                        <div>웹한글/웹한글기안기</div>
                                        <div>2016.12 ~ </div>
                                    </ThumbHoverDivItem>
                                </Link>
                            </ThumbHoverDiv>
                        </ThumbDiv>
                        <ThumbItemDiv>한글과컴퓨터</ThumbItemDiv>
                    </ListItemLi>
                    <ListItemLi>
                        <ThumbDiv padding={'35px'}>
                            <ThumbImg src={osstem_logo} alt="Osstem Implant Logo" />
                            <ThumbHoverDiv>
                                <Link style={LinkStyle} to={`${BaseURL}/Company-OsstemImplant`} >
                                    <ThumbHoverDivItem>
                                        <div>오스템임플란트</div>
                                        <div>치과용 프로그램</div>
                                        <div>2013.04 ~ 2016.12</div>
                                    </ThumbHoverDivItem>
                                </Link>
                            </ThumbHoverDiv>
                        </ThumbDiv>
                        <ThumbItemDiv>오스템임플란트</ThumbItemDiv>
                    </ListItemLi>
                    <ListItemLi>
                        <ThumbDiv padding={'45px'}>
                            <ThumbImg src={bluebirdlogo} alt="Bluebird Logo" />
                            <ThumbHoverDiv>
                                <Link style={LinkStyle} to={`${BaseURL}/Company-Bluebird`} >
                                    <ThumbHoverDivItem>
                                        <div>블루버드소프트</div>
                                        <div>산업용 PDA개발</div>
                                        <div>2010.06 ~ 2012.04</div>
                                    </ThumbHoverDivItem>
                                </Link>
                            </ThumbHoverDiv>
                        </ThumbDiv>
                        <ThumbItemDiv>블루버드소프트</ThumbItemDiv>
                    </ListItemLi>
                </ListUl>
            </CompanyDiv>
        );
    }
};

export default Company;