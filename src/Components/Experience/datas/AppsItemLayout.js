import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import circle from '../../../../imgs/circle.svg';

export const CardItemLi = styled.li`
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 76px 40px 0;
    margin: 0 auto;
    z-index : 1;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        width: 150px;
        min-width: 150px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        width: 200px;
        min-width: 200px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        width: 250px;
        min-width: 250px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        width: 300px;
        min-width: 300px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        width: 350px;
        min-width: 350px;
    }
`;

const CardItemDiv = styled.div`
    width : 100%;
    position : relative;

    display : flex;
    flex-direction : column;
    flex : 1;

    border-radius : 5px;
    box-sizing : border-box;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        height: 300px;
        min-height: 300px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        height: 350px;
        min-height: 350px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        height: 400px;
        min-height: 400px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 450px;
        min-height: 450px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 500px;
        min-height: 500px;
    }
`;

const CardItemTopImg = styled.img`
    border-radius : 5px 5px 0 0;
    cursor: pointer;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        height: 150px;
        min-height: 150px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        height: 200px;
        min-height: 200px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        height: 250px;
        min-height: 250px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 300px;
        min-height: 300px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 350px;
        min-height: 350px;
    }
`;

const CardItemBottomDiv = styled.div`
    height : 150px;
    padding : 15px;
    box-sizing : border-box;
`;

const CardItemTitleDiv = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    text-align: center;
`;

const CardItemBottomTitleSpan = styled.span`
    cursor: pointer;
    font-weight : 600;
    color: #008073;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        font-size: 13px;
        line-height: 1.5rem;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        font-size: 17px;
        line-height: 1.5rem;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        font-size: 20px;
        line-height: 2.0rem;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size: 22px;
        line-height: 2.0rem;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size: 24px;
        line-height: 2.5rem;
    }
`;

const CardItemBottomTitleImg = styled.img`
    cursor: pointer;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        height: 13px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        height: 17px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        height: 20px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 22px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 24px;
    }
`;

const CardItemBottomDescDiv = styled.div`
    padding : 5px 0 0 0;
    line-height: 1.5rem;

    font-size: 16px;
    font-weight : 600;
    
    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        font-size: 10px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        font-size: 12px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        font-size: 14px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size: 16px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size: 18px;
    }
`;

const CardItemRevealDiv = styled.div`
    padding : 20px;
    position: absolute;
    background-color: #FFF;
    width: 100%;
    border-radius : 5px;
    top : 0px;
    overflow-y: auto;
    box-sizing: border-box;
    color : #008073;
    display : flex;
    flex : 1;
    flex-direction : column;
    transform: scaleY(${props => props.isshow === true ? "1" : "0"});
    transition: transform 0.5s ease;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        height: 300px;
        min-height: 300px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        height: 350px;
        min-height: 350px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        height: 400px;
        min-height: 400px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 450px;
        min-height: 450px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 500px;
        min-height: 500px;
    }
`;

const CardItemRevealTitleSpan = styled.span`
    cursor: pointer;
    display: block;
    display : flex;
    align-items: center;
    font-weight : 900;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        height: 8px;
        font-size: 8px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        height: 13px;
        font-size: 13px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        height: 18px;
        font-size: 18px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 20px;
        font-size: 20px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 22px;
        font-size: 22px;
    }
`;

const CardItemRevealExitSpan = styled.span`
    cursor: pointer;
    display : flex;
    align-items: center;
    font-weight : 600;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        height: 8px;
        font-size: 8px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        height: 13px;
        font-size: 13px;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        height: 18px;
        font-size: 18px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 20px;
        font-size: 20px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 22px;
        font-size: 22px;
    }
`;

const CardItemContentDiv = styled.div`
    margin : 20px 0 0 0;
    display : flex;
    flex-direction : column;
    font-weight : 600;
`;

const CardItemContentDetailImg = styled.img`
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

const CardItemContentDetailDiv = styled.div`
    padding-left : 5px;
    font-weight : 600;

    /* Mobile Device */
    @media screen and (min-width : 0px) and (max-width : 320px) {
        font-size : 8px;
        line-height : 1.0rem;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 500px) {
        font-size : 10px;
        line-height : 1.4rem;
    }

    /* Mobile Device */
    @media screen and (min-width : 501px) and (max-width : 767px) {
        font-size : 10px;
        line-height : 1.6rem;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size : 12px;
        line-height : 1.8rem;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size : 14px;
        line-height : 2.0rem;
    }
`;

const CardItemFooterDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right : 0;
    border-top: 1px solid rgba(160,160,160,0.2);
    padding: 20px;
`;

const CardItemFooterItemDiv = styled.div`
    width : 40px;
    height : 40px;
    cursor: pointer;
    margin-right : ${props => props.marginRight ? props.marginRight : null};
`;

const CardItemFooterItemImg = styled.img`
    cursor : pointer;
    height : 100%;
`;

let oldTranslate, oldIsShow;

function AppsItemLayout( { expInfo } ) {
    const [reveal, setReveal] = useState({
        translate : oldTranslate === undefined ? '0px' : oldTranslate,
        isshow : oldIsShow === undefined ? false : oldIsShow});

    const { translate, isshow } = reveal;
    const OnRevealClick = () => setReveal({
        translate : translate === '0px' ? '-100%' : '0px',
        isshow : isshow === true ? false : true
    });

    oldTranslate = translate;
    oldIsShow = isshow;

    const { itemTitles, itemDesc, itemContents, itemFooters, itemImages } = expInfo;
    
    const { bottitle, revealtitle } = itemTitles;
    const { date, role, style, skills, bundle, others } = itemContents;
    
    const { online, source } = itemFooters;
    const { online_url, online_tooltip } = online;
    const { source_url, source_tooltip } = source;

    const { top, titlemore, onlineimg, sourceimg } = itemImages;
    const { top_src, top_alt } = top;
    const { titlemore_src, titlemore_alt } = titlemore;
    const { onlineimg_src, onlineimg_alt } = onlineimg;
    const { sourceimg_src, sourceimg_alt } = sourceimg;

    
    return (
        <CardItemLi>
            <CardItemDiv>
                <CardItemTopImg src={top_src} alt={top_alt} onClick={OnRevealClick} />
                <CardItemBottomDiv>
                    <CardItemTitleDiv>
                        <CardItemBottomTitleSpan onClick={OnRevealClick} >{bottitle}</CardItemBottomTitleSpan>
                        <CardItemBottomTitleImg src={titlemore_src} alt={titlemore_alt} onClick={OnRevealClick}></CardItemBottomTitleImg>
                    </CardItemTitleDiv>
                    <CardItemBottomDescDiv>{itemDesc}</CardItemBottomDescDiv>
                </CardItemBottomDiv>
                <CardItemRevealDiv translate={translate} isshow={isshow}>
                    <CardItemTitleDiv>
                        <CardItemRevealTitleSpan onClick={OnRevealClick}>{revealtitle}</CardItemRevealTitleSpan>
                        <CardItemRevealExitSpan onClick={OnRevealClick}>X</CardItemRevealExitSpan>
                    </CardItemTitleDiv>
                    <CardItemContentDiv>
                        <CardItemContentDetailDiv>
                            <CardItemContentDetailImg src={circle} alt="" />Date: {date}
                        </CardItemContentDetailDiv>
                        <CardItemContentDetailDiv>
                            <CardItemContentDetailImg src={circle} alt="" />Role: {role}
                        </CardItemContentDetailDiv>
                        <CardItemContentDetailDiv>
                            <CardItemContentDetailImg src={circle} alt="" />Style : {style}
                        </CardItemContentDetailDiv>
                        <CardItemContentDetailDiv>
                            <CardItemContentDetailImg src={circle} alt="" />Skills : {skills}
                        </CardItemContentDetailDiv>
                        <CardItemContentDetailDiv>
                            <CardItemContentDetailImg src={circle} alt="" />Bundle : {bundle}
                        </CardItemContentDetailDiv>
                        <CardItemContentDetailDiv>
                            <CardItemContentDetailImg src={circle} alt="" />Othes : {others}
                        </CardItemContentDetailDiv>
                    </CardItemContentDiv>
                    <CardItemFooterDiv>
                        {
                            online_url ? (
                            <CardItemFooterItemDiv className="tooltip" marginRight={'20px'} onClick={(e) => { window.open(online_url, '_blank'); }}>
                                <span className="tooltiptext">{online_tooltip}</span>
                                <CardItemFooterItemImg src={onlineimg_src} alt={onlineimg_alt}></CardItemFooterItemImg>
                            </CardItemFooterItemDiv>
                            ) : null
                        }
                        {
                            source_url ? (
                                <CardItemFooterItemDiv className="tooltip" onClick={(e) => { window.open(source_url, '_blank'); }}>
                                <span className="tooltiptext">{source_tooltip}</span>
                                <CardItemFooterItemImg src={sourceimg_src} alt={sourceimg_alt}></CardItemFooterItemImg>
                            </CardItemFooterItemDiv>
                            ) : null
                        }
                    </CardItemFooterDiv>
                </CardItemRevealDiv>
            </CardItemDiv>
        </CardItemLi>
    );
};

export default AppsItemLayout;

