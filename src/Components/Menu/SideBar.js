import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Link, Route } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';

import avatar_profile from '../../../imgs/avatar_profile.png';
import github from '../../../imgs/github.svg';
import facebook from '../../../imgs/facebook.svg';
import instagram from '../../../imgs/instagram.svg';

const SideBarDiv = styled.div`
    width : ${props => (props.isSidebarOpen ? '220px' : '0px')} !important;
    background : #3F4651;
    position : relative;
    box-shadow: 0 1px 4px rgba(0,21,41,0.08);
    box-sizing: border-box;
    opacity : ${props => (props.isSidebarOpen ? 1 : 0)} ;
    padding : ${props => (props.isSidebarOpen ? '10px 20px 20px 20px' : '0px')} ;
    -webkit-transition: width 0.5s ease;
    -moz-transition: width 0.5s ease;
    transition: width 0.5s ease;
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
`;

const AvatarImg = styled.img`
    width : 100%;
    height : 100%;
    border-radius: 50%;
`;

const AvatarContentDiv = styled.div`
    margin : 10px 0 20px 0;
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
    position : absolute;
    bottom : 15px;
    display : flex;
`;

const SideBarLinkDiv = styled.div`
    width : 20px;
    height : 20px;
    padding : 0 5px 0 0;
    cursor: pointer;
`;

const SideBarLinkImg = styled.img`
    width : 100%;
    height : 100%;
`;

const LinkStyle = {
    display : 'flex',
    alignItems: 'center',
    width : '100%',
    height : '100%',
    textDecoration: 'none',
    color : 'white'
};

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = { isSidebarOpen : true };
    }

    render() {
        const onNavItemClick = (e) => {
            let {textContent} = e.target;
            switch(textContent) {
                case "Home":
                case "About":
                case "Company":
                case "Apps":
                    break;
                default:
                    textContent = "Home";
                    break;
            }
            
            this.props.onNavChange(textContent);
        }
        return (
            <SideBarDiv isSidebarOpen={this.props.isSidebarOpen} >
                <SideBarSection>
                    <Link style={LinkStyle} to="/hong-portfolio/" onClick={onNavItemClick}>
                        <span>Hong's Portfolio</span>
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
                <SidebarMenu onNavChange={this.props.onNavChange} onNavItemClick={onNavItemClick}/>
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
    }
}

export default SideBar;