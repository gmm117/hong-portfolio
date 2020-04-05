import React from 'react';
import styled, { css } from 'styled-components';

import { DimensionDiv, TileThumbImg, DeviceDirectWidth, DirectSizeStyle, ListItemCircleImg } from '../../Utils/CommonStyle';

const CompLi = styled.li`
    width : 100%;
    margin : 0 40px;
    display : flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border-radius: 0 0 2px 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '0', max : '320px' })} {
        min-height: 200px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '321px', max : '767px' })} {
        min-height: 250px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth( { min : '768px', max : '991px' })} {
        min-height: 300px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '992px' })} {
        min-height: 350px;
    }
`;

const CompItemDiv = styled.div`
    width: 100%;
    box-sizing : border-box;
    padding : 20px;
`;

const CompItemContentDiv = styled.div`
    width : 100%;
    height : 30px;
    box-sizing : border-box;
`;

const CompItemContentTitleDiv = styled.div`
    display : flex;
    color : #008073;
    font-size: 20px;
    font-weight : 600;

    ${css`
        >span {
            cursor : pointer;
            height : 12px;
            padding-bottom : 10px;
            &:hover {
                border-bottom : 2px solid #008073;
            }
        }
    `}
`;

const CompItemContentHr = styled.hr`
    height : 1px;
    width : 100%;
    border : none;
    background: rgba(0, 0, 0, .1);
    margin : 10px 0;

    /* Mobile Device */
    @media ${DeviceDirectWidth( { max : '767px' })} {
        margin : 5px 0;
    }
`;

const CompItemBottomDiv = styled.div`
    width : 100%;
    padding-top : 20px;

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '768px' })} {
        display : flex;
    }
`;

const CompItemImgScale = (scale) => css`
    &:hover {
        transform:scale(${scale}); /* 마우스 오버시 이미지 크기를 scale 배만큼 확대시킨다. */
        -o-transform:scale(${scale}); 
        -moz-transform:scale(${scale});
        -webkit-transform:scale(${scale});

        transition: transform .35s;  
        -o-transition: transform .35s;
        -moz-transition: transform .35s;
        -webkit-transition: transform .35s;
    }
`;

const CompItemImgDiv = styled.div`
    cursor:pointer;
    box-shadow: 0 1px 10px rgba(0,21,41,0.08);

    &:hover {
        ${CompItemImgScale(1.3)};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '375px', max : '520px' })} {
        ${DirectSizeStyle({width: '200px', height: '200px'})}; 

        &:hover {
            ${CompItemImgScale(1.1)};
        }
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '521px', max : '767px' })} {
        ${DirectSizeStyle({width: '250px', height: '250px'})}; 

        &:hover {
            ${CompItemImgScale(1.2)};
        }
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth( { min : '768px', max : '991px' })} {
        ${DirectSizeStyle({width: '300px', height: '300px'})}; 
        margin-right : 35px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '992px' })} {
        ${DirectSizeStyle({width: '350px', height: '350px'})}; 
        margin-right : 40px;
    }
`;

const CompItemDetailDiv = styled.div`
    width : 100%;
 
    div + div {
        margin-top : 10px;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '992px' })} {
        font-size : 16px;
        justify-content : center;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth( { min : '768px', max : '991px' })} {
        font-size : 14px;
        justify-content : center;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '320px', max : '767px' })} {
        font-size : 12px;
        margin-top : 15px;
        justify-content : flex-start;
    }
`;

const CompItemDetailDetailDiv = styled.div`
    display : flex;
    align-items : center;
    font-weight : 600;
`;

const CompItemDetailDetailContentDiv = styled.div`
    padding-left : 20px;
    font-weight : 600;

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '992px' })} {
        font-size : 16px;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth( { min : '768px', max : '991px' })} {
        font-size : 14px;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '320px', max : '767px' })} {
        font-size : 12px;
    }
`;

const CompItemActionDiv = styled.div`
    background: rgba(0, 0, 0, 0.05);
    padding: 20px;
    font-weight : 600;
    width : 100%;
    box-sizing: border-box;
`;

const CompListItem = (src, desc) => {
    return (
        src ? (
            <CompItemDetailDetailDiv>
                <ListItemCircleImg />
                { desc + ': ' + src }
            </CompItemDetailDetailDiv>
        ) : null
    );
};

function CompLayout({ compInfo }) {
    const { title, image, sublist } = compInfo;
    const { main_src, main_alt } = image.main;
    const { date, type, role, skills, tools, url, contents } = sublist;
    const { content1, content2 } = contents;

    return (
        <CompLi>
            <CompItemDiv>
                <CompItemContentDiv>
                    <CompItemContentTitleDiv>
                        <span onClick={() => window.open(url.href, "_blank")}> {title}</span>
                    </CompItemContentTitleDiv>
                </CompItemContentDiv>
                <CompItemContentHr />
                <CompItemBottomDiv>
                    <CompItemImgDiv>
                        <TileThumbImg src={main_src} alt={main_alt} />
                    </CompItemImgDiv>
                    <CompItemDetailDiv>
                        { CompListItem(type, 'Type') }
                        { CompListItem(role, 'Role') }
                        { CompListItem(skills, 'Skills') }
                        { CompListItem(tools, 'Tools') }
                        <DimensionDiv width={'100%'}>
                            { CompListItem('\u00A0', 'Contents') }
                            <CompItemDetailDetailContentDiv>
                                {( content1 != null ? <div> - {content1}</div> : null )}
                                {( content2 != null ? <div> - {content2}</div> : null )}
                            </CompItemDetailDetailContentDiv>
                        </DimensionDiv>
                    </CompItemDetailDiv>
                </CompItemBottomDiv>
            </CompItemDiv>
            <CompItemActionDiv>
                <span>{date}</span>
            </CompItemActionDiv>
        </CompLi>
    );
}

export default CompLayout;

