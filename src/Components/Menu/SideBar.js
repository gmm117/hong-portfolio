import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Link, Route } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import { BaseURL } from '../Utils/Define';

import avatar_profile from '../../../imgs/avatar_profile.png';
import github from '../../../imgs/github.svg';
import facebook from '../../../imgs/facebook.svg';
import instagram from '../../../imgs/instagram.svg';

const SideBarDiv = styled.div`
    max-width : ${props => (props.isSidebarOpen ? '170px' : '0px')};
    width : 100%;
    height : 100%;
    background : #3F4651;
    position : relative;
    box-shadow: 0 1px 4px rgba(0,21,41,0.08);
    box-sizing: border-box;
    opacity : ${props => (props.isSidebarOpen ? 1 : 0)} ;
    padding : ${props => (props.isSidebarOpen ? '10px 20px 20px 20px' : '0px')} ;
    -webkit-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;

    @media screen and (max-width : 767px) {
        min-width : ${props => (props.isSidebarOpen ? '80px' : '0px')};
        max-width : ${props => (props.isSidebarOpen ? '80px' : '0px')};
        padding : ${props => (props.isSidebarOpen ? '10px 5px 10px 5px' : '0px')} ;
    }
`;

const SideBarSection = styled.div`
    padding: 4px;
    font-weight : 500;
    color: white;
    margin : 0 0 30px 0;
`;

const AvatarImgDiv = styled.div`
    width: 60px;
    height: 60px;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        width: 45px;
        height: 45px;
        margin: 0 0 10px 0;
    }
`;

const AvatarImg = styled.img`
    width : 100%;
    height : 100%;
    border-radius: 50%;
`;

const AvatarContentDiv = styled.div`
    margin : 10px 0 20px 0;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        display: none;
    }
`; 

const AvatarName = styled.div`
    font-size: 14px;
    font-weight : 500;
    color: #BFCBD9;
`;

const AvatarOccupation = styled.div`
    font-size: 12px;
    color: #BFCBD9;
    line-height: 1.6;
`;

const SideBarLink = styled.div`
    display : flex;

    div + div {
        padding : 0 0 0 5px;
    }

    /* Mobile Device */
    @media screen and (min-height : 350px) {
        position : absolute;
        bottom : 15px;
`;

const SideBarLinkDiv = styled.div`
    width : 20px;
    height : 20px;
    cursor: pointer;
`;

const SideBarLinkImg = styled.img`
    width : 100%;
    height : 100%;
`;

const SideBarLinkStyle = {
    width : '100%',
    height : '100%',
    textDecoration: 'none',
    color : 'white',
};

const SideBarSubDiv = styled.div`
    display: flex;
    justify-content : flex-start;
    align-items : stretch;
    flex-direction: column;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        justify-content : center;
        align-items : center;
    }
`;

const SideBarSectionLinkDiv = styled.div`
    display: flex;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        display: block;

        div + div {
            margin-top : 4px;
        }

        div:nth-child(2) {
            display: none;
        }
    }
`;

function SideBar( { isSidebarOpen } ) {

    return (
        <SideBarDiv isSidebarOpen={isSidebarOpen} >
            <SideBarSubDiv>
                <SideBarSection>
                    <Link style={SideBarLinkStyle} to={`${BaseURL}/`}>
                        <SideBarSectionLinkDiv>
                            <div>Hong's</div>
                            <div>{'\u00A0'}</div>
                            <div> Portfolio</div>
                        </SideBarSectionLinkDiv>
                    </Link>
                </SideBarSection>
                <AvatarImgDiv >
                    <AvatarImg src={avatar_profile} alt="Hong's Image" />
                </AvatarImgDiv>
                <AvatarContentDiv>
                    <AvatarName>홍 승 아</AvatarName>
                    <AvatarOccupation>Front End Developer</AvatarOccupation>
                    <AvatarOccupation>010-7118-2519</AvatarOccupation>
                </AvatarContentDiv>
                <SidebarMenu/>
            </SideBarSubDiv>
            <SideBarLink>
                <SideBarLinkDiv className="tooltip" onClick={(e) => { window.open('https://github.com/gmm117', '_blank'); }}>
                    <span className="tooltiptext">GitHub</span>
                    <SideBarLinkImg src={github} alt="GitHub Link" />
                </SideBarLinkDiv> 
                <SideBarLinkDiv className="tooltip" onClick={(e) => { window.open('https://www.facebook.com/profile.php?id=100002349562000', '_blank'); }}>
                    <span className="tooltiptext">FaceBook</span>
                    <SideBarLinkImg src={facebook} alt="FaceBook Link" />
                </SideBarLinkDiv>
                <SideBarLinkDiv className="tooltip" onClick={(e) => { window.open('https://www.instagram.com/hongseunga/', '_blank'); }}>
                    <span className="tooltiptext">Instagram</span>
                    <SideBarLinkImg src={instagram} alt="Instagram Link" />
                </SideBarLinkDiv>
            </SideBarLink>
        </SideBarDiv>
    );
};

export default SideBar;