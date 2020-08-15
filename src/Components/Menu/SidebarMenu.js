import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { baseURL } from '../utils/define';
import { LinkStyle, DeviceDirectWidth, DirectSizeStyle, DeviceDirectHeight } from '../utils/CommonStyle';
import homeImg from '../../../imgs/home.svg';
import cubeImg from '../../../imgs/cube.svg';
import userImg from '../../../imgs/user.svg';
import experienceImg from '../../../imgs/experience.svg';
import voiceMailImg from '../../../imgs/voice-mail.svg';


const SideBarMenuList = styled.li`
    display: flex;
    align-items: center;
    color: #8493A5;
    padding:1.0rem 1.5rem 1.0rem 0;
    cursor:pointer;
    height:25px;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max:'767px' })} {
        padding:1.0rem 0 1.0rem 0;
    }

    /* Mobile Device */
    @media ${DeviceDirectHeight({ max:'480px' })} {
        padding:0.3rem 0 0.3rem 0;
    }
`;

const LinkImgDiv = styled.div`
    ${DirectSizeStyle({ width:'20px', height: '20px'})};
    margin-right: 0.5rem;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max:'767px' })} {
        ${DirectSizeStyle({ width:'30px', height: '30px'})};
        margin-right: 0;
    }
`;

const LinkImg = styled.img`
-    ${DirectSizeStyle({ width:'100%', height: '100%'})};
`;

const LinkDesDiv = styled.span`
    color: #8493A5;
    font-size: 18px;
    &:hover {
        color:white;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max:'767px' })} {
        display: none;
    }
`;

const LinkSubDiv = styled.div`
    display: flex;
    align-items: center;
    ${DirectSizeStyle({ width:'100%', height: '100%'})};

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max:'767px' })} {
        justify-content:center;
    }
`;

const SideBarComponentItem = ({ url, title, src, alt }) => {
    return (
        <SideBarMenuList>
            <Link style={LinkStyle} to={url}>
                <LinkSubDiv>
                    <LinkImgDiv className="tooltip">
                        <span className="tooltiptext">{title}</span>
                        <LinkImg src={src} alt={alt} />
                    </LinkImgDiv>
                    <LinkDesDiv>{title}</LinkDesDiv>
                </LinkSubDiv>
            </Link> 
        </SideBarMenuList>
    );
};

const sideBarItem = [
    { url:`${baseURL}/`, title: 'Home', src: homeImg, alt: 'Home' },
    { url:`${baseURL}/About`, title: 'About', src: userImg, alt: 'About' },
    { url:`${baseURL}/Company`, title: 'Company', src: cubeImg, alt: 'Company Projects' },
    { url:`${baseURL}/Experience`, title: 'Experience', src: experienceImg, alt: 'Experience' },
    { url:`${baseURL}/Contact`, title: 'Contact', src: voiceMailImg, alt: 'Contact' }
];

class SidebarMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {
                    sideBarItem.map(({url, title, src, alt}, index) => <SideBarComponentItem key={index} url={url} title={title} src={src} alt={alt} />)
                }
            </ul>
        );
    }
}

export default SidebarMenu;