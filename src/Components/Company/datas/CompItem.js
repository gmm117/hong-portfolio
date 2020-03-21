import React from 'react';
import styled from 'styled-components';

import { LinkButtonStyle } from '../../Utils/CommonStyle';
import circle from '../../../../imgs/circle.svg';

const CompLi = styled.li`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction: column;
    margin : 0 auto;
`;

const CompTitleDiv = styled.div`
    font-weight : 600;
    color : black;

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size : 20px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size : 17px;
    }

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        font-size : 15x;
    }
`;

const CompBottomDiv = styled.div`
    display : flex;
    margin-top : 15px;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        display : block;
    }
`;

const CompImgDiv = styled.div`
    width : 500px;
    min-width : 500px;
    height : 500px;
    min-height : 500px;
    margin-right : 15px;
    box-shadow: 0 1px 10px rgba(0,21,41,0.08);

    div + div {
        margin-top : 10px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) and (max-width : 1023px) {
        width : 400px;
        min-width : 400px;
        height : 400px;
        min-height : 400px;
        margin-right : 10px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        width : 300px;
        min-width : 300px;
        height : 300px;
        min-height : 300px;
        margin-right : 10px;
    }

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        width : 200px;
        min-width : 200px;
        height : 200px;
        min-height : 200px;
        margin-bottom : 10px;
    }

    /* Mobile Device */
    @media screen and (max-width : 320px) {
        width : 180px;
        min-width : 180px;
        height : 180px;
        min-height : 180px;
        margin-bottom : 10px;
    }
`;

const CompImgTitleImg = styled.img`
    width : 100%;
    height : 100%;
`;

const CompImgThumDiv = styled.div`
    width : 100%;
    height : 100%;
`;

const CompDetailDiv = styled.div`
    width : 100%;
 
    div + div {
        margin-top : 10px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size : 16px;
        justify-content : center;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size : 14px;
        justify-content : center;
    }

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        font-size : 12px;
        justify-content : flex-start;
    }
`;


const CompDetailDetail = styled.div`
    display : flex;
    align-items : center;
`;

const CompDetailContent = styled.div`
    width : 100%;
`;

const CompDetailDetailContent = styled.div`
    padding-left : 20px;

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size : 14px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size : 12px;
    }

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        font-size : 10px;
    }
`;

const CompDetailDetailImg = styled.img`
    margin-right : 5px;

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        width: 5px;
        min-width : 5px;
        height: 5px;
        min-height 5px: 
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        width: 3px;
        min-width : 3px;
        height: 3px;
        min-height 3px: 
    }

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        width: 2px;
        min-width : 2px;
        height: 2px;
        min-height 2px: 
    }
`;

const CompDetailDetailHr = styled.hr`
    height : 1px;
    width : 100%;
    border : none;
    background: rgba(0, 0, 0, .1);
    margin : 10px 0;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        margin : 5px 0;
    }
`;

function CompItem( {compInfo} ) {
    const { title, image, sublist } = compInfo;
    const { main_src, main_alt } = image.main;
    const { date, type, role, skills, tools, url, contents } = sublist;
    const { content1, content2 } = contents;

    return (
        <CompLi>
            <CompTitleDiv>{title}</CompTitleDiv>
            <CompBottomDiv>
                <CompImgDiv>
                    <CompImgTitleImg src={main_src} alt={main_alt} />
                    {/* <CompImgThumDiv>

                    </CompImgThumDiv> */}
                </CompImgDiv>
                <CompDetailDiv>
                    <CompDetailDetail>
                        <CompDetailDetailImg src={circle} alt="" />Date : {date}
                    </CompDetailDetail>
                    <CompDetailDetail>
                        <CompDetailDetailImg src={circle} alt="" />Type : {type}
                    </CompDetailDetail>
                    <CompDetailDetail>
                        <CompDetailDetailImg src={circle} alt="" />Role : {role}
                    </CompDetailDetail>
                    <CompDetailDetail>
                        <CompDetailDetailImg src={circle} alt="" />Skills : {skills}
                    </CompDetailDetail>
                    <CompDetailDetail>
                        <CompDetailDetailImg src={circle} alt="" />Tools : {tools}
                    </CompDetailDetail>
                    <CompDetailDetailHr />
                    <CompDetailContent>
                        <CompDetailDetail>
                            <CompDetailDetailImg src={circle} alt="" /> Contents :{'\u00A0'}
                        </CompDetailDetail>
                        <CompDetailDetailContent>
                            {( content1 != null ? <div> - {content1}</div> : null )}
                            {( content2 != null ? <div> - {content2}</div> : null )}
                        </CompDetailDetailContent>
                    </CompDetailContent>
                    <CompDetailDetail>
                        <LinkButtonStyle className="tooltip" onClick={() => window.open(url.href, "_blank")}>
                            <span className="tooltiptext">{url.value}</span>
                            <span>Link</span>
                        </LinkButtonStyle>
                    </CompDetailDetail>
                </CompDetailDiv>
            </CompBottomDiv>
        </CompLi>
    );
};

export default CompItem;

