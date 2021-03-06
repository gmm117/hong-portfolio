import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import menu from '../../imgs/menu.png';

import { DispatchContext } from '../App';
import { AutoLayoutStyle } from './styles/CommonStyle';

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
    width: 20px;
    min-width: 20px;
    height: 20px;
    min-height: 20px;
    cursor: pointer;
    margin: 0 15px 0 5px;
`;

const NavTitle = styled.span`
    color: #97A8BE;
    font: 14px;
`;

const NavImg = styled.img`
    ${AutoLayoutStyle};
`;

function Header({ navName }) {
    const dispatch = useContext(DispatchContext);

    const onSideClick = useCallback(() => {
        dispatch({
            type: "OPEN_SIDEBAR"
        });
    }, [dispatch]);

    return (
        /* jshint ignore:start */
        <HeaderDiv>
            <NavDiv onClick={onSideClick}>
                <NavImg src={menu} alt="Navigator" />
            </NavDiv>
            <NavTitle>{navName}</NavTitle>
        </HeaderDiv>
        /* jshint ignore:end */
    );
}

export default Header;