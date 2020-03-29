import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BaseURL } from '../Utils/Define';
import { LinkStyle } from '../Utils/CommonStyle';
import homeImg from '../../../imgs/home.svg';
import cubeImg from '../../../imgs/cube.svg';
import userImg from '../../../imgs/user.svg';
import experienceImg from '../../../imgs/experience.svg';
import voiceMailImg from '../../../imgs/voice-mail.svg';


const SideBarMenuList = styled.li`
    display: flex;
    align-items: center;
    color: #8493A5;
    padding : 1.0rem 1.5rem 1.0rem 0;
    cursor : pointer;
    height : 25px;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        padding : 1.0rem 0 1.0rem 0;
    }

    /* Mobile Device */
    @media screen and (max-height : 480px) {
        padding : 0.3rem 0 0.3rem 0;
    }
`;

const LinkImgDiv = styled.div`
    width : 20px;
    min-width : 20px;
    height : 20px;
    min-height : 20px;
    margin-right: 0.5rem;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        width : 30px;
        min-width : 30px;
        height : 30px;
        min-height : 30px;
        margin-right: 0;
    }
`;

const LinkImg = styled.img`
    width : 100%;
    height : 100%;
`;

const LinkDesDiv = styled.span`
    color: #8493A5;
    font-size: 18px;
    &:hover {
        color : white;
    }

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        display: none;
    }
`;

const LinkSubDiv = styled.div`
    display: flex;
    align-items: center;
    width : 100%;
    height : 100%;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        justify-content : center;
    }
`;

class SidebarMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <SideBarMenuList>
                    <Link style={LinkStyle} to={`${BaseURL}/`}>
                        <LinkSubDiv>
                            <LinkImgDiv className="tooltip">
                                <span className="tooltiptext">Home</span>
                                <LinkImg src={homeImg} alt="Home" />
                            </LinkImgDiv>
                            <LinkDesDiv>Home</LinkDesDiv>
                        </LinkSubDiv>
                    </Link> 
                </SideBarMenuList>
                <SideBarMenuList>
                    <Link style={LinkStyle} to={`${BaseURL}/About`}>
                        <LinkSubDiv>
                            <LinkImgDiv className="tooltip">
                                <span className="tooltiptext">About</span>
                                <LinkImg src={userImg} alt="About" />
                            </LinkImgDiv>
                            <LinkDesDiv>About</LinkDesDiv>
                        </LinkSubDiv>
                    </Link>
                </SideBarMenuList>
                <SideBarMenuList>
                    <Link style={LinkStyle} to={`${BaseURL}/Company`}>
                        <LinkSubDiv>
                            <LinkImgDiv className="tooltip">
                                <span className="tooltiptext">Company</span>
                                <LinkImg src={cubeImg} alt="Company Projects" />
                            </LinkImgDiv>
                            <LinkDesDiv>Company</LinkDesDiv>
                        </LinkSubDiv>
                    </Link>
                </SideBarMenuList>
                <SideBarMenuList>
                    <Link style={LinkStyle} to={`${BaseURL}/Experience`}>
                        <LinkSubDiv>
                            <LinkImgDiv className="tooltip">
                                <span className="tooltiptext">Experience</span>
                                <LinkImg src={experienceImg} alt="Experience" />
                            </LinkImgDiv>
                            <LinkDesDiv>Experience</LinkDesDiv>
                        </LinkSubDiv>
                    </Link>
                </SideBarMenuList>
                <SideBarMenuList>
                    <Link style={LinkStyle} to={`${BaseURL}/Contact`}>
                        <LinkSubDiv>
                            <LinkImgDiv className="tooltip">
                                <span className="tooltiptext">Contact</span>
                                <LinkImg src={voiceMailImg} alt="Contact" />
                            </LinkImgDiv>
                            <LinkDesDiv>Contact</LinkDesDiv>
                        </LinkSubDiv>
                    </Link>
                </SideBarMenuList>
            </ul>
        );
    }
};

export default SidebarMenu;