import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BaseURL } from '../Utils/Define';
import { LinkStyle } from '../Utils/CommonStyle';
import home from '../../../imgs/home.svg';
import cube from '../../../imgs/cube.svg';
import user from '../../../imgs/user.svg';

const SideBarMenuList = styled.li`
    display: flex;
    align-items: center;
    color: #8493A5;
    padding-top: 0.5rem;
    padding-right: 1.5rem;
    padding-bottom: 0.5rem;
    cursor : pointer;
    height : 25px;
`;

const LinkImg = styled.img`
    width : 13px;
    height : 13px;
    margin-right: 0.5rem;
`;

const LinkDesDiv = styled.span`
    color: #8493A5;
    &:hover {
        color : white;
    }
`;

class SidebarMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <ul>
                    <SideBarMenuList>
                        <Link style={LinkStyle} to="/hong-portfolio/">
                            <LinkImg src={home} alt="Home" />
                            <LinkDesDiv>Home</LinkDesDiv>
                        </Link> 
                    </SideBarMenuList>
                    <SideBarMenuList>
                        <Link style={LinkStyle} to="/hong-portfolio/About">
                            <LinkImg src={user} alt="About" />
                            <LinkDesDiv>About</LinkDesDiv>
                        </Link>
                    </SideBarMenuList>
                    <SideBarMenuList>
                        <Link style={LinkStyle} to="/hong-portfolio/Company">
                            <LinkImg src={cube} alt="Company Projects" />
                            <LinkDesDiv>Company</LinkDesDiv>
                        </Link>
                    </SideBarMenuList>
                    <SideBarMenuList>
                        <Link style={LinkStyle} to="/hong-portfolio/Apps">
                            <LinkImg src={cube} alt="Individaul Apps" />
                            <LinkDesDiv>Apps</LinkDesDiv>
                        </Link>
                    </SideBarMenuList>
                </ul>
            </>
        );
    }
};

export default SidebarMenu;