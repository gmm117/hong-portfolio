import React, { Component } from 'react';
import styled from 'styled-components';
import nav_img from '../../imgs/icon_nav.png';

const HeaderDiv = styled.div`
    display : flex;
    padding : 10px;
    background : #00A287;
`;

const NavDiv = styled.div`
    width : 33px;
    cursor : pointer;
    background : url(${nav_img}) no-repeat left top;
    width : 33px;
    height : 27px;
    margin-right : 10px;
`;


const TitleDiv = styled.div`
    display : flex;
    align-items : center;
    color : white;
`;

class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <NavDiv />
                <TitleDiv>Hong's Portfolio</TitleDiv>
            </HeaderDiv>
        );
    }
};

export default Header;