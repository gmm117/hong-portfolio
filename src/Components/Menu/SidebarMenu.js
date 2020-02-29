import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const LinkStyle = {
    display : 'flex',
    alignItems: 'center',
    width : '100%',
    height : '100%',
    textDecoration: 'none',

};

const LinkImg = styled.img`
    width : 13px;
    height : 13px;
    margin-right: 0.5rem;
`;

const LinkDesDiv = styled.span`
    color: #8493A5;
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
                        <Link style={LinkStyle} to="/" onClick={this.props.onNavItemClick}>
                            <LinkImg src={home} alt="Home" />
                            <LinkDesDiv>Home</LinkDesDiv>
                        </Link> 
                    </SideBarMenuList>
                    <SideBarMenuList>
                        <Link style={LinkStyle} to="/About" onClick={this.props.onNavItemClick}>
                            <LinkImg src={user} alt="About" />
                            <LinkDesDiv>About</LinkDesDiv>
                        </Link>
                    </SideBarMenuList>
                    <SideBarMenuList>
                        <Link style={LinkStyle} to="/Company" onClick={this.props.onNavItemClick}>
                            <LinkImg src={cube} alt="Company Projects" />
                            <LinkDesDiv>Company</LinkDesDiv>
                        </Link>
                    </SideBarMenuList>
                    <SideBarMenuList>
                        <Link style={LinkStyle} to="/Apps" onClick={this.props.onNavItemClick}>
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