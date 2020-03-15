import React, { useEffect } from 'react';
import styled from 'styled-components';
import Profile from '../../imgs/profile.jpg';

const AboutBody = styled.div`
    font-size: 14px; 
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    display : flex;
    flex-direction: column;
    flex: 1;
    height : 100%;
    color : black;
    font-weight : 600;
    line-height : 1.0;
    padding : 30px;
    align-items : center;

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        font-size: 17px; 
        flex-direction: row;
        line-height : 1.3;
        align-items: stretch;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        font-size: 20px; 
        flex-direction: row;
        line-height : 1.3;
        align-items: stretch;
    }
`;

const ProfileImage = styled.img`
    width: 220px;
    min-width : 220px;
    height: 250px;
    min-height : 250px;
    border-radius : 10%;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        width: 180px;
        min-width : 180px;
        height: 210px;
        min-height : 210px;
        margin: 0px 0px 15px 0px; 
    }

    /* Desktop Device */
    @media screen and (min-width : 768px) {
        float: left; 
        margin: 0px 15px 5px 0px;
    }
`;

function About( {location, onLocationChange}) {
    useEffect(() => {
        onLocationChange(location);
    }, [location, onLocationChange]);

    return (
        <AboutBody>
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
        </AboutBody>
    );
}

export default About;