import styled from 'styled-components';

export const LinkStyle = {
    display : 'inline-block',
    width : '100%',
    height : '100%',
    textDecoration: 'none'
};

export const LinkButtonStyle = styled.div`
    display : flex;
    align-items:center;
    justify-content: center;
    width : 70px;
    height : 25px;
    color : rgba(100,100,100,0.75);
    background : white;
    border : 1px solid rgba(100,100,100,0.75);
    border-radius : 3px;
    cursor : pointer;
    font-weight : 600;
    font-size : 15px;
`;