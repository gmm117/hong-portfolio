import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FeatureTitle, DeviceWidth, DeviceDirectWidth, DirectSizeStyle, AutoLayoutStyle, AutoLayoutDiv } from './utils/CommonStyle';

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
    
    font-weight: 600;
    line-height: 1.0;
    padding: 30px;
`;

const IntroduceDiv = styled.div`
    ${AutoLayoutStyle};

    /* Tablet Device */
    @media ${DeviceDirectWidth({ max: '991px' })} {
        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 17px; 
        line-height: 1.3;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px' })} {
        font-size: 20px; 
        line-height: 1.3;
    }
`;

const ProfileDiv = styled.div`
    /* Desktop Device */
    @media ${DeviceDirectWidth({ max: '767px' })} {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const ProfileImage = styled.img.attrs({
    src: Profile,
    alt:"Hong's Image"
  })`
       
    ${DirectSizeStyle({ width: '300px', height: '300px' })};
    border-radius: 10%;

    /* Mobile Device */    
    @media ${DeviceDirectWidth({ max: '320px' })} {
        ${DirectSizeStyle({ width: '100%', height: '200px' })};
        margin: 0px 0px 15px 0px; 
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '767px' })} {
        ${DirectSizeStyle({ width: '250px', height: '250px' })};
        margin: 0px 0px 15px 0px; 
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '768px' })} {
        float: left; 
        margin: 0px 15px 5px 0px;
    }
`;

const AboutTitleDiv = styled.div`
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

const AboutSkillDiv = styled.div`
    width: 100%;
    margin: 130px 0 0 0;
`;

const SkillDiv = styled.div`
    display: flex;
    flex: 1;
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
`;

const SkillItemDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    margin: 0 auto 60px 0;
    box-sizing: border-box;
    color: #333;
    font-family: Noto Sans Medium,AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
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

    /* Mobile Small Device */
    @media ${DeviceWidth.mobileS} {
        font-size: 2rem;
    }
`;

const SkillItemListDiv = styled.div`
    display: flex;
    align-item: center;
    flex-wrap: wrap;
`;

const SkillItemListDetailDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    text-align: center;

    /* Mobile Device */
   
    @media ${DeviceDirectWidth({ min: '0px', max: '320px' })} {
        margin: 10px 20px 0 0;
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth({ min: '321px', max: '767px' })} {
        margin: 10px 25px 0 0;
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth({ min: '768px', max: '991px' })} {
        margin: 10px 35px 0 0;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px'})} {
        margin: 10px 45px 0 0;
    }
`;

const SkillItemListDetailImg = styled.img`
    max-width: 100px;
    min-height: 100px;  
    max-height: 100px;
    padding-bottom: 8px;

    /* Mobile Device */
    @media ${DeviceDirectWidth({ max: '767px'})} {
        max-width: 70px;
        min-height: 70px;  
        max-height: 70px;
    }
`;

const AboutCurFocusDiv = styled.div`
    display: flex;
    line-height: 1.3;
    color: black;
    margin-top: 15px;

    /* Tablet Device */
    @media ${DeviceDirectWidth({ max: '991px' })} {
        font-size: 23px; 
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth({ min: '992px' })} {
        font-size: 25px; 
    }
`;

const skillListDatas = [
    { title: 'HTML', items: [
        { img: html5Img, alt: "HTML5 IMAGE", desc: "HTML5"},
        { img: reactImg, alt: "JSX IMAGE", desc: "JSX"}
    ]},
    { title: 'STYLE', items: [
        { img: css3Img, alt: "CSS3 IMAGE", desc: "CSS3"},
        { img: sassImg, alt: "SCSS IMAGE", desc: "SCSS"},
        { img: styleComponentsImg, alt: "STYLE_COMPONENTS IMAGE", desc: "Style Components"}
    ]},
    { title: 'JAVSCRIPT', items: [
        { img: reactImg, alt: "REACT IMAGE", desc: "REACT"},
        { img: javascriptImg, alt: "JAVASCRIPT IMAGE", desc: "JAVASCRIPT"},
        { img: typescriptImg, alt: "TYPESCRIPT IMAGE", desc: "TYPESCRIPT"},
        { img: nodejsImg, alt: "NODEJS IMAGE", desc: "NodeJS"}
    ]},
    { title: 'WINDOWS', items: [
        { img: cImg, alt: "C IMAGE", desc: "C"},
        { img: cplusplusImg, alt: "C++ IMAGE", desc: "C++"},
        { img: csharpImg, alt: "C# IMAGE", desc: "C#"},
        { img: wpfImg, alt: "WPF IMAGE", desc: "WPF"}
    ]},
    { title: 'OTHERS', items: [
        { img: electronImg, alt: "ELECTRON IMAGE", desc: "ELECTRON"},
        { img: webpackImg, alt: "WEBPACK IMAGE", desc: "WEBPACK"},
        { img: parcelImg, alt: "PARCEL IMAGE", desc: "PARCEL"},
        { img: gitImg, alt: "GIT IMAGE", desc: "GIT"},
        { img: githubImg, alt: "GITHUB IMAGE", desc: "GITHUB"},
        { img: herokuImg, alt: "HEROKU IMAGE", desc: "HEROKU"}
    ]}
];

const SkillListItem = ({ title, items }) => {
    return (
        /* jshint ignore:start */
        <SkillItemDiv>
            <SkillItemContentDiv>
                <SkillItemTitle>{title}</SkillItemTitle>
                <SkillItemListDiv>
                    {
                        items ? items.map((item, index) => (
                            <SkillItemListDetailDiv key={index}>
                                <SkillItemListDetailImg src={item.img} alt={item.alt}></SkillItemListDetailImg>
                                {item.desc}
                            </SkillItemListDetailDiv>
                        )) : null
                    }
                </SkillItemListDiv>
            </SkillItemContentDiv>
        </SkillItemDiv>
        /* jshint ignore:end */
    );
};

function About({ location, onLocationChange }) {
    useEffect(() => {
        onLocationChange(location);
    }, [location, onLocationChange]);

    return (
        /* jshint ignore:start */
        <AboutBody>
            <IntroduceDiv className="clearfix">
                <AboutTitleDiv>INTRODUCE</AboutTitleDiv>
                <AutoLayoutDiv>
                    <ProfileDiv>
                        <ProfileImage/>
                    </ProfileDiv>
                    <div>
                        저의 개발자로서의 성향은 3가지의 단어(도전,노력,공유)로 표현 할 수 있을 것 같습니다.<br/><br/>
                        빠르게 변화하는 기술에 대해서 적극적으로 기술을 습득하려는 도전적인 자세를 지냈으며,<br/>
                        저에게 주어지는 업무나 관심있어하는 분야에 대해서는 끊임없이 배우려고 노력하는 자세도 가지고 있습니다.<br/><br/>
                        이런 자세 덕분에 7년의 윈도우 개발자에서 웹 개발자로 전향을 할 수 있었고, 이런 경험을 통해서 개발자로서의 역량을 더 높일 수 있었습니다.<br/>
                        <br/>
                        마지막으로 저는 제가 했던 업무,스터디 했던 내용을 팀원들이나 특정 개발자에게 도움을 주고자 개발공유를 하고 있습니다.<br/><br/>
                        회사에는 wiki페이지에 스터디한 내용은 github 공유해서 개인의 발전이 아닌 전체가 발전할 수 있는 생태계를 만들고 싶은게 저의 개발자로서의 꿈입니다.
                    </div>
                </AutoLayoutDiv>
            </IntroduceDiv>
            <AboutCurFocusDiv>Current Focus: React, CSS(SCSS, Styled Components) </AboutCurFocusDiv>
            <AboutSkillDiv>
                <AboutTitleDiv>SKILLS</AboutTitleDiv>
                <SkillDiv>
                    {
                        skillListDatas.map(({ title, items }, index) => <SkillListItem key={index} title={title} items={items} /> )
                    }
                </SkillDiv>
            </AboutSkillDiv>
        </AboutBody>
        /* jshint ignore:end */
    );
}

export default About;