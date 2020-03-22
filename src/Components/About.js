import React, { useEffect } from 'react';
import styled from 'styled-components';
import Profile from '../../imgs/profile.jpg';
import html5Img from '../../imgs/html5.png';
import reactImg from '../../imgs/react.png';
import css3Img from '../../imgs/css3.png';
import sassImg from '../../imgs/sass.png';
import styleComponentsImg from '../../imgs/style_components.png';
import nodejsImg from '../../imgs/nodejs.png';
import javascriptImg from '../../imgs/javascript.png';
import typescriptImg from '../../imgs/typescript.png';

import cImg from '../../imgs/c.png';
import cplusplusImg from '../../imgs/cplusplus.png';
import csharpImg from '../../imgs/csharp.png';
import wpfImg from '../../imgs/wpf.png';

import electronImg from '../../imgs/electron.png';
import webpackImg from '../../imgs/webpack.png';
import parcelImg from '../../imgs/parcel.png';
import gitImg from '../../imgs/git.png';
import githubImg from '../../imgs/github.png';
import herokuImg from '../../imgs/heroku.png';


const AboutBody = styled.div`
    font-size: 14px; 
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    
    font-weight : 600;
    line-height : 1.0;
    padding : 30px;
`;

const IntroduceDiv = styled.div`
    width : 100%;
    height : 100%;

    /* Tablet Device */
    @media screen and (max-width : 991px) {
        display : flex;
        flex-direction: column;
        align-items : center;

        font-size: 17px; 
        line-height : 1.3;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size: 20px; 
        line-height : 1.3;
    }
`;

const ProfileImage = styled.img`
    width: 300px;
    min-width : 300px;
    height: 300px;
    min-height : 300px;
    border-radius : 10%;

    /* Mobile Device */
    @media screen and (max-width : 320px) {
        width: 200px;
        min-width : 200px;
        height: 200px;
        min-height : 200px;
        margin: 0px 0px 15px 0px; 
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 767px) {
        width: 250px;
        min-width : 250px;
        height: 250px;
        min-height : 250px;
        margin: 0px 0px 15px 0px; 
    }

    /* Desktop Device */
    @media screen and (min-width : 768px) {
        float: left; 
        margin: 0px 15px 5px 0px;
    }
`;

const AboutContentDiv = styled.div`
    width : 100%;
    height : 100%;
`;

const AboutTitleDiv = styled.div`
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

const AboutSkillDiv = styled.div`
    width : 100%;
    margin : 130px 0 0 0;
`;

const SkillDiv = styled.div`
    display : flex;
    flex: 1;
    margin : 0 auto;
    width : 100%;
`;

const SkillUl = styled.ul`
    width : 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    color: #333;
    font-family: Noto Sans Medium,AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
`;

const SkillLi = styled.li`
    width : 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    margin: 0 auto;

    /* Mobile Device */
    @media screen and (min-width : 320px) {
        height: 200px;
        min-height: 200px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 767px) {
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

const SkillItemDiv = styled.div`
    width: 100%;
    margin-bottom: 60px;
`;

const SkillItemContentDiv = styled.div`
    width: 100%;
    padding-bottom: 30px;
    padding: 20px;
    border-radius: 0 0 2px 2px;
    box-sizing: border-box;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;

const SkillItemTitle = styled.div`
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
    padding-bottom: 20px;
    font-weight: 300;
    color: #795548;
    font-size: 2.28rem;
    line-height: 2.508rem;
    margin: 1.14rem 0 0.912rem 0;
`;

const SkillItemListDiv = styled.div`
    display : flex;
    align-item : center;
    flex-wrap : wrap;
`;

const SkillItemListDetailDiv = styled.div`
    display : flex;
    flex-direction : column;
    box-sizing: border-box;
    text-align : center;

    /* Mobile Device */
    @media screen and (min-width : 320px) {
        margin : 10px 20px 0 0;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 767px) {
        margin : 10px 25px 0 0;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        margin : 10px 35px 0 0;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        margin : 10px 45px 0 0;
    }
`;

const SkillItemListDetailImg = styled.img`
    max-width : 100px;
    min-height: 100px;  
    max-height: 100px;
    padding-bottom : 8px;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        max-width : 70px;
        min-height: 70px;  
        max-height: 70px;
    }
`;


function About( {location, onLocationChange}) {
    useEffect(() => {
        onLocationChange(location);
    }, [location, onLocationChange]);

    return (
        <AboutBody>
            <IntroduceDiv className="clearfix">
                <AboutTitleDiv>INTRODUCE</AboutTitleDiv>
                <AboutContentDiv>
                    <ProfileImage src={Profile} alt="Hong's Image" />
                    <div>
                        저의 개발자로서의 성향은 3가지의 단어(도전,노력,공유)로 표현 할 수 있을 것 같습니다.<br/><br/>
                        빠르게 변화하는 기술에 대해서 적극적으로 기술을 습득하려는 도전적인 자세를 지냈으며,<br/>
                        저에게 주어지는 업무나 관심있어하는 분야에 대해서는 끊임없이 배우려고 노력하는 자세도 가지고 있습니다.<br/><br/>
                        이런 자세 덕분에 7년의 윈도우 개발자에서 웹 개발자로 전향을 할 수 있었고, 이런 경험을 통해서 개발자로서의 역량을 더 높일 수 있었습니다.<br/>
                        <br/>
                        마지막으로 저는 제가 했던 업무,스터디 했던 내용을 팀원들이나 특정 개발자에게 도움을 주고자 개발공유를 하고 있습니다.<br/><br/>
                        회사에는 wiki페이지에 스터디한 내용은 github 공유해서 개인의 발전이 아닌 전체가 발전할 수 있는 생태계를 만들고 싶은게 저의 개발자로서의 꿈입니다.
                    </div>
                </AboutContentDiv>
            </IntroduceDiv>
            <AboutSkillDiv>
                <AboutTitleDiv>SKILLS</AboutTitleDiv>
                <SkillDiv>
                    <SkillUl>
                        <SkillLi>
                            <SkillItemDiv>
                                <SkillItemContentDiv>
                                    <SkillItemTitle>HTML</SkillItemTitle>
                                    <SkillItemListDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={html5Img} alt="HTML5 IMAGE"></SkillItemListDetailImg>
                                            HTML5
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={reactImg} alt="JSX IMAGE"></SkillItemListDetailImg>
                                            JSX
                                        </SkillItemListDetailDiv>
                                    </SkillItemListDiv>
                                </SkillItemContentDiv>
                            </SkillItemDiv>
                            <SkillItemDiv>
                                <SkillItemContentDiv>
                                    <SkillItemTitle>STYLE</SkillItemTitle>
                                    <SkillItemListDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={css3Img} alt="CSS3 IMAGE"></SkillItemListDetailImg>
                                            CSS3
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={sassImg} alt="SCSS IMAGE"></SkillItemListDetailImg>
                                            SCSS
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={styleComponentsImg} alt="STYLE_COMPONENTS IMAGE"></SkillItemListDetailImg>
                                            Style Components
                                        </SkillItemListDetailDiv>
                                    </SkillItemListDiv>
                                </SkillItemContentDiv>
                            </SkillItemDiv>
                            <SkillItemDiv>
                                <SkillItemContentDiv>
                                    <SkillItemTitle>JAVSCRIPT</SkillItemTitle>
                                    <SkillItemListDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={reactImg} alt="REACT IMAGE"></SkillItemListDetailImg>
                                            REACT
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={javascriptImg} alt="JAVASCRIPT IMAGE"></SkillItemListDetailImg>
                                            JAVASCRIPT
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={typescriptImg} alt="TYPESCRIPT IMAGE"></SkillItemListDetailImg>
                                            TYPESCRIPT
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={nodejsImg} alt="NODEJS IMAGE"></SkillItemListDetailImg>
                                            NodeJS
                                        </SkillItemListDetailDiv>
                                    </SkillItemListDiv>
                                </SkillItemContentDiv>
                            </SkillItemDiv>
                            <SkillItemDiv>
                                <SkillItemContentDiv>
                                    <SkillItemTitle>WINDOWS</SkillItemTitle>
                                    <SkillItemListDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={cImg} alt="C IMAGE"></SkillItemListDetailImg>
                                            C
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={cplusplusImg} alt="C++ IMAGE"></SkillItemListDetailImg>
                                            C++
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={csharpImg} alt="C# IMAGE"></SkillItemListDetailImg>
                                            C#
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={wpfImg} alt="WPF IMAGE"></SkillItemListDetailImg>
                                            WPF
                                        </SkillItemListDetailDiv>
                                    </SkillItemListDiv>
                                </SkillItemContentDiv>
                            </SkillItemDiv>
                            <SkillItemDiv>
                                <SkillItemContentDiv>
                                    <SkillItemTitle>OTHERS</SkillItemTitle>
                                    <SkillItemListDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={electronImg} alt="ELECTRON IMAGE"></SkillItemListDetailImg>
                                            ELECTRON
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={webpackImg} alt="WEBPACK IMAGE"></SkillItemListDetailImg>
                                            WEBPACK
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={parcelImg} alt="PARCEL IMAGE"></SkillItemListDetailImg>
                                            PARCEL
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={gitImg} alt="GIT IMAGE"></SkillItemListDetailImg>
                                            GIT
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={githubImg} alt="GITHUB IMAGE"></SkillItemListDetailImg>
                                            GITHUB
                                        </SkillItemListDetailDiv>
                                        <SkillItemListDetailDiv>
                                            <SkillItemListDetailImg src={herokuImg} alt="HEROKU IMAGE"></SkillItemListDetailImg>
                                            HEROKU
                                        </SkillItemListDetailDiv>
                                    </SkillItemListDiv>
                                </SkillItemContentDiv>
                            </SkillItemDiv>
                        </SkillLi>
                    </SkillUl>
                </SkillDiv>
            </AboutSkillDiv>
        </AboutBody>
    );
}

export default About;