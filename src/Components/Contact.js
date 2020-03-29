import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { TileDiv } from './Utils/CommonStyle';


import mail from '../../imgs/mail.svg';
import github from '../../imgs/github.svg';
import person from '../../imgs/person.svg';
import phone from '../../imgs/phone.svg';

const ContactDiv = styled(TileDiv)`
    flex-direction : column;
    padding : 5px;
    box-sizing: border-box;
`;

const ContactTopDiv = styled.div`
    width : 100%;
    margin : 30px auto;
    font-weight : 600px;
    font-size: 42px;
    position : relative;
    text-align : center;

    &:before {
        left: 0;
        position: absolute;
        top: 50%;
        display: block;
        width: 30%;
        border-bottom: 5px solid rgba(0, 0, 0, 0.25);
        content: "";
    }
    &:after {
        right: 0;
        position: absolute;
        top: 50%;
        display: block;
        width: 30%;
        border-bottom: 5px solid rgba(0, 0, 0, 0.25);
        content: "";
    }

    /* Mobile Device */
    @media screen and (min-width : 320px) and (max-width : 375px) {
        font-size: 20px;
        &:before {
            left: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 10%;
            border-bottom: 5px solid rgba(0, 0, 0, 0.25);
            content: "";
        }
        &:after {
            right: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 10%;
            border-bottom: 5px solid rgba(0, 0, 0, 0.25);
            content: "";
        }
    }

    /* Mobile Device */
    @media screen and (min-width : 376px) and (max-width : 425px) {
        font-size: 30px;
        &:before {
            left: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 15%;
            border-bottom: 5px solid rgba(0, 0, 0, 0.25);
            content: "";
        }
        &:after {
            right: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 15%;
            border-bottom: 5px solid rgba(0, 0, 0, 0.25);
            content: "";
        }
    }

    /* Mobile Device */
    @media screen and (min-width : 426px) and (max-width : 768px) {
        font-size: 30px;
        &:before {
            left: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 20%;
            border-bottom: 5px solid rgba(0, 0, 0, 0.25);
            content: "";
        }
        &:after {
            right: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 20%;
            border-bottom: 5px solid rgba(0, 0, 0, 0.25);
            content: "";
        }
    }

    /* Tablet Device */
    @media screen and (min-width : 769px) and (max-width : 991px) {
        font-size: 42px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size: 42px;
    }
`;

const ContactItemImg = styled.img`
    margin-right : 10px;
    width: 40px;
    min-width : 40px;
    height: 40px;
    min-height 40px:
    cursor: pointer;
`;

const ContactItemDiv = styled.div`
    margin-top : 30px;
    padding-left : 5px;
    font-weight : 600;
    display : flex;
    align-items : center;
    font-size : 20px;
    color : #008073;
    font-weight : 600;
`;

const ContactItemSubDiv = styled.div`
    ${css`
        >span {
            cursor : ${props => props.cursorType ? props.cursorType : null};
            height : 12px;
            padding-bottom : 6px;
            &:hover {
                border-bottom : 2px solid #2b8a3e;
            }
        }

        >a {
            cursor : ${props => props.cursorType ? props.cursorType : null};
            height : 12px;
            padding-bottom : 6px;
            color : #008073;
            text-decoration : none;
            &:hover {
                border-bottom : 2px solid #2b8a3e;
            }
        }
    `}
`;


function Contact( {location, onLocationChange}) {
    useEffect(() => {
        onLocationChange(location);
    }, [location, onLocationChange]);

    return (
        <ContactDiv>
            <ContactTopDiv>Contact</ContactTopDiv>
            <ContactItemDiv>
                <ContactItemImg src={person} alt="Name" />
                <ContactItemSubDiv>
                    <span>홍 승 아</span>
                </ContactItemSubDiv> 
            </ContactItemDiv>
            <ContactItemDiv>
                <ContactItemImg src={phone} alt="Phone" />
                <ContactItemSubDiv cursorType={"pointer"}>
                    <a href="tel:01071182519">010-7118-2519</a>
                </ContactItemSubDiv>  
            </ContactItemDiv>
            <ContactItemDiv>
                <ContactItemImg src={github} alt="GitHub Address" />
                <ContactItemSubDiv cursorType={"pointer"} > 
                    <span onClick={() => window.open("https://github.com/gmm117", "_blank")}>github.com/gmm117</span>
                </ContactItemSubDiv>  
            </ContactItemDiv>
            <ContactItemDiv>
                <ContactItemImg src={mail} alt="gmm117@naver.com" />
                <ContactItemSubDiv cursorType={"pointer"} >
                    <a href="mailto:gmm117@naver.com">gmm117@naver.com</a>
                </ContactItemSubDiv>  
            </ContactItemDiv>
        </ContactDiv>
    );
}

export default Contact;