import React from 'react';
import styled, { css } from 'styled-components';

import { LinkButtonStyle } from '../../Utils/CommonStyle';
import circle from '../../../../imgs/circle.svg';

// const CompLi = styled.li`
//     width : 100%;
//     height : 100%;
//     display : flex;
//     flex-direction: column;
//     margin : 0 auto;
// `;

// const CompTitleDiv = styled.div`
//     font-weight : 600;
//     color : black;

//     /* Desktop Device */
//     @media screen and (min-width : 992px) {
//         font-size : 20px;
//     }

//     /* Tablet Device */
//     @media screen and (min-width : 768px) and (max-width : 991px) {
//         font-size : 17px;
//     }

//     /* Mobile Device */
//     @media screen and (max-width : 767px) {
//         font-size : 15x;
//     }
// `;

// const CompBottomDiv = styled.div`
//     display : flex;
//     margin-top : 15px;

//     /* Mobile Device */
//     @media screen and (max-width : 767px) {
//         display : block;
//     }
// `;

// const CompImgDiv = styled.div`
//     width : 500px;
//     min-width : 500px;
//     height : 500px;
//     min-height : 500px;
//     margin-right : 15px;
//     box-shadow: 0 1px 10px rgba(0,21,41,0.08);

//     div + div {
//         margin-top : 10px;
//     }

//     /* Desktop Device */
//     @media screen and (min-width : 992px) and (max-width : 1023px) {
//         width : 400px;
//         min-width : 400px;
//         height : 400px;
//         min-height : 400px;
//         margin-right : 10px;
//     }

//     /* Tablet Device */
//     @media screen and (min-width : 768px) and (max-width : 991px) {
//         width : 300px;
//         min-width : 300px;
//         height : 300px;
//         min-height : 300px;
//         margin-right : 10px;
//     }

//     /* Mobile Device */
//     @media screen and (max-width : 767px) {
//         width : 200px;
//         min-width : 200px;
//         height : 200px;
//         min-height : 200px;
//         margin-bottom : 10px;
//     }

//     /* Mobile Device */
//     @media screen and (max-width : 320px) {
//         width : 180px;
//         min-width : 180px;
//         height : 180px;
//         min-height : 180px;
//         margin-bottom : 10px;
//     }
// `;

// const CompImgTitleImg = styled.img`
//     width : 100%;
//     height : 100%;
// `;

// const CompImgThumDiv = styled.div`
//     width : 100%;
//     height : 100%;
// `;

// const CompDetailDiv = styled.div`
//     width : 100%;
 
//     div + div {
//         margin-top : 10px;
//     }

//     /* Desktop Device */
//     @media screen and (min-width : 992px) {
//         font-size : 16px;
//         justify-content : center;
//     }

//     /* Tablet Device */
//     @media screen and (min-width : 768px) and (max-width : 991px) {
//         font-size : 14px;
//         justify-content : center;
//     }

//     /* Mobile Device */
//     @media screen and (max-width : 767px) {
//         font-size : 12px;
//         justify-content : flex-start;
//     }
// `;


// const CompDetailDetail = styled.div`
//     display : flex;
//     align-items : center;
// `;

// const CompDetailContent = styled.div`
//     width : 100%;
// `;

// const CompDetailDetailContent = styled.div`
//     padding-left : 20px;

//     /* Desktop Device */
//     @media screen and (min-width : 992px) {
//         font-size : 14px;
//     }

//     /* Tablet Device */
//     @media screen and (min-width : 768px) and (max-width : 991px) {
//         font-size : 12px;
//     }

//     /* Mobile Device */
//     @media screen and (max-width : 767px) {
//         font-size : 10px;
//     }
// `;

// const CompDetailDetailImg = styled.img`
//     margin-right : 5px;

//     /* Desktop Device */
//     @media screen and (min-width : 992px) {
//         width: 5px;
//         min-width : 5px;
//         height: 5px;
//         min-height 5px: 
//     }

//     /* Tablet Device */
//     @media screen and (min-width : 768px) and (max-width : 991px) {
//         width: 3px;
//         min-width : 3px;
//         height: 3px;
//         min-height 3px: 
//     }

//     /* Mobile Device */
//     @media screen and (max-width : 767px) {
//         width: 2px;
//         min-width : 2px;
//         height: 2px;
//         min-height 2px: 
//     }
// `;

// const CompDetailDetailHr = styled.hr`
//     height : 1px;
//     width : 100%;
//     border : none;
//     background: rgba(0, 0, 0, .1);
//     margin : 10px 0;

//     /* Mobile Device */
//     @media screen and (max-width : 767px) {
//         margin : 5px 0;
//     }
// `;

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
    @media screen and (min-width : 320px) {
        min-height: 200px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 767px) {
        min-height: 250px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        min-height: 300px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
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
    color : #5c940d;
    font-weight : 600;

    ${css`
        >span {
            cursor : pointer;
            height : 12px;
            padding-bottom : 10px;
            &:hover {
                border-bottom : 2px solid #2b8a3e;
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
    @media screen and (max-width : 767px) {
        margin : 5px 0;
    }
`;

const CompItemBottomDiv = styled.div`
    width : 100%;
    padding-top : 20px;

    /* Desktop Device */
    @media screen and (min-width : 768px) {
        display : flex;
    }
`;

const CompItemImgDiv = styled.div`
    cursor:pointer;
    box-shadow: 0 1px 10px rgba(0,21,41,0.08);

    &:hover {
        transform:scale(1.3); /* 마우스 오버시 이미지 크기를 1.1 배만큼 확대시킨다. */
        -o-transform:scale(1.3); 
        -moz-transform:scale(1.3);
        -webkit-transform:scale(1.3);
 
        transition: transform .35s;  
        -o-transition: transform .35s;
        -moz-transition: transform .35s;
        -webkit-transition: transform .35s;
    }

    /* Mobile Device */
    @media screen and (min-width : 375px) and (max-width : 520px) {
        width : 100%;
        height : 200px;
        min-height : 200px;

        &:hover {
            transform:scale(1.1); /* 마우스 오버시 이미지 크기를 1.1 배만큼 확대시킨다. */
            -o-transform:scale(1.1); 
            -moz-transform:scale(1.1);
            -webkit-transform:scale(1.1);
     
            transition: transform .35s;  
            -o-transition: transform .35s;
            -moz-transition: transform .35s;
            -webkit-transition: transform .35s;
        }
    }

    /* Mobile Device */
    @media screen and (min-width : 521px) and (max-width : 767px) {
        width : 250px;
        min-width : 250px;
        height : 250px;
        min-height : 250px;

        &:hover {
            transform:scale(1.2); /* 마우스 오버시 이미지 크기를 1.1 배만큼 확대시킨다. */
            -o-transform:scale(1.2); 
            -moz-transform:scale(1.2);
            -webkit-transform:scale(1.2);
     
            transition: transform .35s;  
            -o-transition: transform .35s;
            -moz-transition: transform .35s;
            -webkit-transition: transform .35s;
        }
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        width : 300px;
        min-width : 300px;
        height : 300px;
        min-height : 300px;
        margin-right : 35px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        width : 350px;
        min-width : 350px;
        height : 350px;
        min-height : 350px;
        margin-right : 40px;
    }
`;

const CompItemImgTitleImg = styled.img`
    width : 100%;
    height : 100%;
`;

const CompItemDetailDiv = styled.div`
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
    @media screen and (min-width : 320px) and (max-width : 767px) {
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

const CompItemDetailDetailImg = styled.img`
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

const CompItemDetailContentDiv = styled.div`
    width : 100%;
`;

const CompItemDetailDetailContentDiv = styled.div`
    padding-left : 20px;
    font-weight : 600;

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size : 16px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size : 14px;
    }

    /* Mobile Device */
    @media screen and (min-width : 320px) and (max-width : 767px) {
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

function CompLayout( {compInfo} ) {
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
                        <CompItemImgTitleImg src={main_src} alt={main_alt} />
                    </CompItemImgDiv>
                    <CompItemDetailDiv>
                        <CompItemDetailDetailDiv>
                            <CompItemDetailDetailImg  src={circle} alt=""/>Type :  {type}
                        </CompItemDetailDetailDiv>
                        <CompItemDetailDetailDiv>
                            <CompItemDetailDetailImg  src={circle} alt=""/>Role :  {role}
                        </CompItemDetailDetailDiv>
                        <CompItemDetailDetailDiv>
                            <CompItemDetailDetailImg  src={circle} alt=""/>Skills : {skills}
                        </CompItemDetailDetailDiv>
                        <CompItemDetailDetailDiv>
                            <CompItemDetailDetailImg  src={circle} alt=""/>Tools : {tools}
                        </CompItemDetailDetailDiv>
                        <CompItemDetailContentDiv>
                            <CompItemDetailDetailDiv>
                                <CompItemDetailDetailImg src={circle} alt="" /> Contents :{'\u00A0'}
                            </CompItemDetailDetailDiv>
                            <CompItemDetailDetailContentDiv>
                                {( content1 != null ? <div> - {content1}</div> : null )}
                                {( content2 != null ? <div> - {content2}</div> : null )}
                            </CompItemDetailDetailContentDiv>
                        </CompItemDetailContentDiv>
                    </CompItemDetailDiv>
                </CompItemBottomDiv>
            </CompItemDiv>
            <CompItemActionDiv>
                    <span>{date}</span>
            </CompItemActionDiv>
        </CompLi>


        // <CompLi>
        //     <CompTitleDiv>{title}</CompTitleDiv>
        //     <CompBottomDiv>
        //         <CompImgDiv>
        //             <CompImgTitleImg src={main_src} alt={main_alt} />
        //             {/* <CompImgThumDiv>

        //             </CompImgThumDiv> */}
        //         </CompImgDiv>
        //         <CompDetailDiv>
        //             <CompDetailDetail>
        //                 <CompDetailDetailImg src={circle} alt="" />Date : {date}
        //             </CompDetailDetail>
        //             <CompDetailDetail>
        //                 <CompDetailDetailImg src={circle} alt="" />Type : {type}
        //             </CompDetailDetail>
        //             <CompDetailDetail>
        //                 <CompDetailDetailImg src={circle} alt="" />Role : {role}
        //             </CompDetailDetail>
        //             <CompDetailDetail>
        //                 <CompDetailDetailImg src={circle} alt="" />Skills : {skills}
        //             </CompDetailDetail>
        //             <CompDetailDetail>
        //                 <CompDetailDetailImg src={circle} alt="" />Tools : {tools}
        //             </CompDetailDetail>
        //             <CompDetailDetailHr />
        //             <CompDetailContent>
        //                 <CompDetailDetail>
        //                     <CompDetailDetailImg src={circle} alt="" /> Contents :{'\u00A0'}
        //                 </CompDetailDetail>
        //                 <CompDetailDetailContent>
        //                     {( content1 != null ? <div> - {content1}</div> : null )}
        //                     {( content2 != null ? <div> - {content2}</div> : null )}
        //                 </CompDetailDetailContent>
        //             </CompDetailContent>
        //             <CompDetailDetail>
        //                 <LinkButtonStyle className="tooltip" onClick={() => window.open(url.href, "_blank")}>
        //                     <span className="tooltiptext">{url.value}</span>
        //                     <span>Link</span>
        //                 </LinkButtonStyle>
        //             </CompDetailDetail>
        //         </CompDetailDiv>
        //     </CompBottomDiv>
        // </CompLi>
    );
};

export default CompLayout;

