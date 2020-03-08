import React, { Component } from 'react';
import styled from 'styled-components';
import menu from '../../imgs/menu.png';

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;    
    width: 100%;
    height: 50px;
    padding: 10px;
    position: relative;  
    background: #FFFFFF;
    box-shadow: 0 1px 4px rgba(0,21,41,0.08);
    box-sizing: border-box;
`;

const NavDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 20px;
    min-width : 20px;
    height : 20px;
    min-height : 20px;
    cursor : pointer;
    margin : 0 15px 0 5px;
`;

const NavTitle = styled.span`
    color : #97A8BE;
    font: 14px;
`;

const NavImg = styled.img`
    width : 100%;
    height : 100%;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.onSidebarChange = this.props.onSidebarChange;
    }

    render() {
        const onSideClick = () => {
            this.onSidebarChange();
        }
        
        return (
            <HeaderDiv>
                <NavDiv onClick={onSideClick}>
                    <NavImg src={menu} alt="Navigator" />
                </NavDiv>
                <NavTitle>{this.props.navName}</NavTitle>
            </HeaderDiv>
        );
    }
};

export default Header;