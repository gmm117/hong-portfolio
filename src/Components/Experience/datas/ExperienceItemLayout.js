import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { DeviceDirectWidth, DirectHeightSizeStyle, DirectWidthSizeStyle, ListItemCircleImg } from '../../Utils/CommonStyle';

export const CardItemLi = styled.li`
    display: flex;
    flex-direction: column;
    padding: 76px 40px 0;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px'})} {
        ${DirectWidthSizeStyle('150px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '375px'})} {
        ${DirectWidthSizeStyle('180px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '376px', max: '500px'})} {
        ${DirectWidthSizeStyle('200px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px'})} {
        ${DirectWidthSizeStyle('250px')};
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        ${DirectWidthSizeStyle('300px')};
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        ${DirectWidthSizeStyle('350px')};
    }
`;

const CardItemDiv = styled.div`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    flex: 1;

    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px' })} {
        ${DirectHeightSizeStyle('300px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '500px' })} {
        ${DirectHeightSizeStyle('350px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px' })} {
        ${DirectHeightSizeStyle('400px')};
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px' })} {
        ${DirectHeightSizeStyle('450px')};
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px' })} {
        ${DirectHeightSizeStyle('500px')};
    }
`;

const CardItemTopImg = styled.img`
    width: 100%;
    border-radius: 5px 5px 0 0;
    cursor: pointer;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px' })} {
        min-width: 150px;
        height: 150px;
        min-height: 150px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '375px' })} {
        min-width: 180px;
        height: 180px;
        min-height: 180px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '376px', max: '500px' })} {
        min-width: 200px;
        height: 200px;
        min-height: 200px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px' })} {
        min-width: 250px;
        height: 250px;
        min-height: 250px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px' })} {
        min-width: 300px;
        height: 300px;
        min-height: 300px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px' })} {
        min-width: 350px;
        height: 350px;
        min-height: 350px;
    }
`;

const CardItemBottomDiv = styled.div`
    padding: 15px;
    border-top: 2px solid rgba(160,160,160,0.2);
    box-sizing: border-box;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '500px'})} {
        ${DirectHeightSizeStyle('100px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px'})} {
        ${DirectHeightSizeStyle('110px')};
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        ${DirectHeightSizeStyle('130px')};
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        ${DirectHeightSizeStyle('150px')};
    }
`;

const CardItemTitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

const CardItemBottomTitleSpan = styled.span`
    cursor: pointer;
    font-weight: 600;
    color: #008073;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px'})} {
        font-size: 13px;
        line-height: 1.5rem;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '500px'})} {
        font-size: 16px;
        line-height: 1.5rem;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px'})} {
        font-size: 18px;
        line-height: 2.0rem;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        font-size: 20px;
        line-height: 2.0rem;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        font-size: 22px;
        line-height: 2.5rem;
    }
`;

const CardItemBottomTitleImg = styled.img`
    cursor: pointer;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px'})} {
        height: 13px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '500px'})} {
        height: 17px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px'})} {
        height: 20px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        height: 22px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        height: 24px;
    }
`;

const CardItemBottomDescDiv = styled.div`
    padding: 5px 0 0 0;
    line-height: 1.5rem;
    font-weight: 600;
    
    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px'})} {
        font-size: 10px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '500px'})} {
        font-size: 12px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px'})} {
        font-size: 14px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        font-size: 16px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        font-size: 18px;
    }
`;

const CardItemRevealDiv = styled.div`
    padding: 20px;
    position: absolute;
    background-color: #FFF;
    width: 100%;
    border-radius: 5px;
    top: 0px;
    overflow-y: auto;
    box-sizing: border-box;
    color: #008073;
    display: flex;
    flex: 1;
    flex-direction: column;
    transform: scaleY(${props => props.isshow === true ? "1" : "0"});
    transition: transform 0.5s ease;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px'})} {
        ${DirectHeightSizeStyle('300px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '500px'})} {
        ${DirectHeightSizeStyle('350px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px'})} {
        ${DirectHeightSizeStyle('400px')};
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        ${DirectHeightSizeStyle('450px')};
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        ${DirectHeightSizeStyle('500px')};
    }
`;

const CartItemRevealDeviceStyle = (fontWeight) => css`
    cursor: pointer;
    display: flex;
    font-weight: ${fontWeight};
    align-items: center;
    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px'})} {
        height: 8px;
        font-size: 8px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '500px'})} {
        height: 13px;
        font-size: 13px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px'})} {
        height: 18px;
        font-size: 18px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px'})} {
        height: 20px;
        font-size: 20px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        height: 22px;
        font-size: 22px;
    }
`;

const CardItemRevealTitleSpan = styled.span`
    ${CartItemRevealDeviceStyle(900)};
`;

const CardItemRevealExitSpan = styled.span`
    ${CartItemRevealDeviceStyle(600)};
`;

const CardItemContentDiv = styled.div`
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    font-weight: 600;
`;

const CardItemContentDetailDiv = styled.div`
    padding-left: 5px;
    font-weight: 600;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '0', max: '320px' })} {
        font-size: 8px;
        line-height: 1.0rem;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '500px' })} {
        font-size: 10px;
        line-height: 1.4rem;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '501px', max: '767px' })} {
        font-size: 10px;
        line-height: 1.6rem;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px' })} {
        font-size: 12px;
        line-height: 1.8rem;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px' })} {
        font-size: 14px;
        line-height: 2.0rem;
    }
`;

const CardItemFooterDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid rgba(160,160,160,0.2);
    padding: 20px;
`;

const CardItemFooterItemDiv = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-right: ${props => props.marginRight ? props.marginRight : null};
`;

const CardItemFooterItemImg = styled.img`
    cursor: pointer;
    height: 100%;
`;

const CardListItem = ({ src, desc }) => {
    return (
        /* jshint ignore:start */
        src ? (
            <CardItemContentDetailDiv>
                <ListItemCircleImg />
                { desc + ': ' + src }
            </CardItemContentDetailDiv>
        ) : null
         /* jshint ignore:end */
    );
};

const CardListFooterItem = ({ src, marginRight }) => {
    const { url, tooltip, imgsrc, imgalt } = src;
    return (
        url ? (
        <CardItemFooterItemDiv 
            className="tooltip"
            marginRight={marginRight}
            onClick={() => { window.open(url, '_blank'); }}>
            <span className="tooltiptext">{tooltip}</span>
            <CardItemFooterItemImg src={imgsrc} alt={imgalt}></CardItemFooterItemImg>
        </CardItemFooterItemDiv>
        ) : null
    );
};

let oldTranslate;

function AppsItemLayout({ expInfo }) {
    const [reveal, setReveal] = useState({
        translate: oldTranslate === undefined ? '0px' : oldTranslate,
        isshow: expInfo.oldIsShow });

    const { translate, isshow } = reveal;
    const OnRevealClick = () => setReveal({
        translate: translate === '0px' ? '-100%' : '0px',
        isshow: isshow === true ? false : true
    });

    oldTranslate = translate;
    expInfo.oldIsShow = isshow;

    const { itemTitles, itemDesc, itemContents, itemFooters, itemImages } = expInfo;
    
    const { bottitle, revealtitle } = itemTitles;
    const { date, role, style, skills, bundle, others, type, program, desc, search, company } = itemContents;
    
    const { online, source, patents } = itemFooters;
    const { online_url, online_tooltip } = online ? online: {};
    const { source_url, source_tooltip } = source ? source: {};
    const { patents_url, patents_tooltip } = patents ? patents: {};


    const { top, titlemore, onlineimg, sourceimg, patentsimg } = itemImages;
    const { top_src, top_alt } = top;
    const { titlemore_src, titlemore_alt } = titlemore;
    const { onlineimg_src, onlineimg_alt } = onlineimg ? onlineimg: {};
    const { sourceimg_src, sourceimg_alt } = sourceimg ? sourceimg: {};
    const { patentsimg_src, patentsimg_alt } = patentsimg ? patentsimg: {};

    const cardList = [
        { src: date, desc: 'Date' },
        { src: role, desc: 'Role' },
        { src: style, desc: 'Style' },
        { src: skills, desc: 'Skills' },
        { src: bundle, desc: 'Bundle' },
        { src: others, desc: 'Others' },
        { src: company, desc: 'Company' },
        { src: type, desc: 'Type' },
        { src: program, desc: 'Program' },
        { src: desc, desc: 'Desc' },
        { src: search, desc: 'Search' },
    ];

    const cardFooterList = [
        { src: {url: online_url, tooltip: online_tooltip, imgsrc: onlineimg_src, imgalt: onlineimg_alt}, marginRight: '20px' },
        { src: {url: source_url, tooltip: source_tooltip, imgsrc: sourceimg_src, imgalt: sourceimg_alt } },
        { src: {url: patents_url, tooltip: patents_tooltip, imgsrc: patentsimg_src, imgalt: patentsimg_alt} }
    ];

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
                        { 
                            cardList.map(({ src, desc }, index) => <CardListItem key={index} src={src} desc={desc} /> ) 
                        }
                    </CardItemContentDiv>
                    <CardItemFooterDiv>
                        { 
                            cardFooterList.map(({ src, marginRight }, index) => <CardListFooterItem key={index} src={src} marginRight={marginRight} /> ) 
                        }
                    </CardItemFooterDiv>
                </CardItemRevealDiv>
            </CardItemDiv>
        </CardItemLi>
    );
}

export default AppsItemLayout;

