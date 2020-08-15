import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { TileDiv, FeatureTitle, DeviceWidth, DeviceDirectWidth, DirectSizeStyle } from './Utils/CommonStyle';

import mail from '../../imgs/mail.svg';
import github from '../../imgs/github.svg';
import person from '../../imgs/person.svg';
import phone from '../../imgs/phone.svg';

const ContactDiv = styled(TileDiv)`
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
`;

const ContactTopDiv = styled.div`
    width: 100%;
    margin: 30px auto;
    font-weight: 600px;
    position: relative;
    text-align: center;

    ${FeatureTitle('30%')};

    /* Mobile Small Device */
    @media ${DeviceWidth.mobileS} {
        font-size: 20px;
        ${FeatureTitle('10%')};
    }
    /* Mobile Medium Device */
    @media ${DeviceWidth.mobileM} {
        font-size: 30px;
        ${FeatureTitle('15%')};
    }
    /* Mobile Large Device */
    @media ${DeviceWidth.mobileL} {
        font-size: 30px;
        ${FeatureTitle('20%')};
    }
    /* Tablet Device */
    @media ${DeviceWidth.tablet} {
        font-size: 35px;
    }
    /* Desktop Device */
    @media ${DeviceWidth.desktop} {
        font-size: 42px;
    }
`;

const ContactItemImg = styled.img`
    margin-right: 10px;
    cursor: pointer;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max: '425px'})} {
        ${DirectSizeStyle({ width: '25px', height: '25px' })};        
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '426px', max: '768px'})} {
        ${DirectSizeStyle({ width: '30px', height: '30px' })};
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '769px', max: '991px'})} {
        ${DirectSizeStyle({ width: '35px', height: '35px' })};
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        ${DirectSizeStyle({ width: '40px', height: '40px' })};
    }
`;

const ContactItemDiv = styled.div`
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
    padding-left: 5px;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max: '425px'})} {
        font-size: 10px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '426px', max: '768px'})} {
        font-size: 15px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '769px', max: '991px'})} {
        font-size: 20px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        font-size: 25px;
    }
`;

const ContactItemSubDiv = styled.div`
    ${css`
        >span {
            cursor: ${props => props.cursorType ? props.cursorType : null};
            height: 12px;
            padding-bottom: 6px;
            &:hover {
                border-bottom: 2px solid rgba(100,100,100,0.75);
            }
        }

        >a {
            cursor: ${props => props.cursorType ? props.cursorType : null};
            height: 12px;
            padding-bottom: 6px;
            color: rgba(100,100,100,0.75);
            text-decoration: none;
            &:hover {
                border-bottom: 2px solid rgba(100,100,100,0.75);
            }
        }
    `}
`;


function Contact({location, onLocationChange}) {
    useEffect(() => {
        onLocationChange(location);
    }, [location, onLocationChange]);

    return (
        /* jshint ignore:start */
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
        /* jshint ignore:end */
    );
}

export default Contact;