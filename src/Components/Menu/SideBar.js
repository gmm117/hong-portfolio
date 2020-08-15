import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import { baseURL } from '../../datas/utils/define';

import avatar_profile from '../../../imgs/avatar_profile.png';
import github from '../../../imgs/github.svg';
import blog from '../../../imgs/blog.svg';
import { DeviceDirectWidth, AutoLayoutStyle } from '../styles/CommonStyle';

const SideBarDiv = styled.div`
    ${AutoLayoutStyle};
    max-width: ${props => (props.isSidebarOpen ? '170px' : '0px')};
    max-width: ${props => (props.isSidebarOpen ? '170px' : '0px')};
    background: #3F4651;
    position: relative;
    box-shadow: 0 1px 4px rgba(0,21,41,0.08);
    box-sizing: border-box;
    opacity: ${props => (props.isSidebarOpen ? 1 : 0)} ;
    padding: ${props => (props.isSidebarOpen ? '10px 20px 20px 20px' : '0px')} ;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;

    @media screen and (max-width: 767px) {
        min-width: ${props => (props.isSidebarOpen ? '80px' : '0px')};
        max-width: ${props => (props.isSidebarOpen ? '80px' : '0px')};
        padding: ${props => (props.isSidebarOpen ? '10px 5px 10px 5px' : '0px')} ;
    }
`;

const SideBarSection = styled.div`
    padding: 4px;
    font-weight: 500;
    color: white;
    margin: 0 0 10px 0;
`;

const AvatarImgDiv = styled.div`
    width: 60px;
    height: 60px;

    /* Mobile Device */
    @media screen and (max-width: 767px) {
        width: 45px;
        height: 45px;
        margin: 0 0 10px 0;
    }
`;

const AvatarImg = styled.img`
    ${AutoLayoutStyle};
    border-radius: 50%;
`;

const AvatarContentDiv = styled.div`
    margin: 10px 0 20px 0;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max: '767px' })} {
        display: none;
    }
`; 

const AvatarName = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #BFCBD9;
`;

const AvatarOccupation = styled.div`
    font-size: 12px;
    color: #BFCBD9;
    line-height: 1.6;

    >a {
        color: #BFCBD9;
        text-decoration: none;
    }
`;

const SideBarLink = styled.div`
    display: flex;

    div + div {
        padding: 0 0 0 5px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '320px' })} {
        position: absolute;
        bottom: 13px;
    }
`;

const SideBarLinkDiv = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const SideBarLinkImg = styled.img`
    ${AutoLayoutStyle};
`;

const SideBarLinkStyle = {
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: 'white',
};

const SideBarSubDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-direction: column;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max: '767px' })} {
        justify-content: center;
        align-items: center;
    }
`;

const SideBarSectionLinkDiv = styled.div`
    display: flex;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max: '767px' })} {
        display: block;

        div + div {
            margin-top: 4px;
        }

        div:nth-child(2) {
            display: none;
        }
    }
`;

function SideBar({ isSidebarOpen } ) {
    return (
        <SideBarDiv isSidebarOpen={isSidebarOpen} >
            <SideBarSubDiv>
                <SideBarSection>
                    <Link style={SideBarLinkStyle} to={`${baseURL}/`}>
                        <SideBarSectionLinkDiv>
                            <div>{`Hong's`}</div>
                            <div>{`\u00A0`}</div>
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
                    <AvatarOccupation style={{cursor:'pointer'}}>
                        <a href="tel:01071182519">010-7118-2519</a>
                    </AvatarOccupation>
                </AvatarContentDiv>
                <SidebarMenu/>
            </SideBarSubDiv>
            <SideBarLink>
                <SideBarLinkDiv className="tooltip" onClick={() => { window.open('https://github.com/gmm117', '_blank'); }}>
                    <span className="tooltiptext">GitHub</span>
                    <SideBarLinkImg src={github} alt="GitHub Link" />
                </SideBarLinkDiv> 
                <SideBarLinkDiv className="tooltip" onClick={() => { window.open('https://gmm117.github.io/', '_blank'); }}>
                    <span className="tooltiptext">Blog</span>
                    <SideBarLinkImg src={blog} alt="Blog Link" />
                </SideBarLinkDiv>
            </SideBarLink>
        </SideBarDiv>
    );
}

export default SideBar;