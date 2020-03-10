import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BaseURL } from '../Utils/Define';
import { GetCompInfo } from './Info/CompInfo';

const CompUl = styled.ul`
    width : 100%;
    max-width : 1000px;  
    height : 100%;
    display : flex;
    justify-content : center;
    margin: 0 auto;
    align-items: center;
    box-sizing: border-box;

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        max-width : 400px;  
    }
`;

const CompLi = styled.li`
    width : 100%;
    height : 500px;
`;

const CompTitleDiv = styled.div`
    font-size : 20px;
    font-weight : 600;
    color : black;
    margin-bottom: 10px;
`;

const CompContentDiv = styled.div`
    width : 100%;
    height : 100%;
    display : flex;

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

    div + div {
        margin-top : 10px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        margin-right : 10px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        width : 400px;
        min-width : 400px;
        height : 400px;
        min-height : 400px;
        margin-right : 10px;
    }

    /* Mobile Device */
    @media screen and (max-width : 767px) {
        width : 300px;
        min-width : 300px;
        height : 300px;
        min-height : 300px;
        margin-bottom : 10px;
    }
`;

const CompImgTitleDiv = styled.div`
    width : 100%;
    height : 100%;
`;

const CompImgTitleImg = styled.img`
    width : 100%;
    height : 100%;
`;

const CompImgThumDiv = styled.div`
    width : 100%;
    height : 30px;
`;

const CompDetailDiv = styled.div`
    width : 100%;
    height : 100%;

    div + div {
        margin-top : 10px;
    }
`;


const CompDetailTop = styled.div`
    width : 100%;
    height : 500px;
`;

const CompDetailTopDetail = styled.div`
    width : 100%;
    color : black;
    font-weight : 600;
`;

const CompDetailBottom = styled.div`
    width : 100%;
    height : 30px;
`;

const DefaultCompInfo = {
    title : "준비중입니다.",
    sublist : {
        date : "", 
        type : "",
        role : "", 
        skills : "", 
        url : {
            href : "",
            value : ""
        }, 
        contents : {
            content1 : "", 
            content2 : ""
        }
    },
    desc : "",
    image : {
        title : {
            src : null, 
            alt : ""
        },
        thumnail1 : {
            src : null, 
            alt : ""
        }
    }
};

function CompProject({location, onLocationChange}) {
    const {pathname} = location;
    let newpathname = pathname.replace(BaseURL, "");
    const [CompInfo, setCompInfo] = useState(DefaultCompInfo);

    useEffect(() => {
        let info = GetCompInfo(newpathname.substr(1));
        if(!info) {
            info = DefaultCompInfo;
        } 

        setCompInfo(
            info
        );
        
     }, []);

    
    onLocationChange(location);

    

    return(
        <CompUl>
            <CompLi>
                <CompTitleDiv>{CompInfo.title}</CompTitleDiv>
                <CompContentDiv>
                    <CompImgDiv>
                        <CompImgTitleDiv>
                            <CompImgTitleImg src={CompInfo.image.title.src} alt={CompInfo.image.title.alt} />
                        </CompImgTitleDiv>
                        <CompImgThumDiv>
  
                        </CompImgThumDiv>
                    </CompImgDiv>
                    <CompDetailDiv>
                        <CompDetailTop>
                            <CompDetailTopDetail>{CompInfo.sublist.date}</CompDetailTopDetail>
                            <CompDetailTopDetail>{CompInfo.sublist.type}</CompDetailTopDetail>
                            <CompDetailTopDetail>{CompInfo.sublist.role}</CompDetailTopDetail>
                            <CompDetailTopDetail>{CompInfo.sublist.skills}</CompDetailTopDetail>
                        </CompDetailTop>
                        <CompDetailBottom>

                        </CompDetailBottom>
                    </CompDetailDiv>
                </CompContentDiv>
            </CompLi>
        </CompUl>
    );
};

export default CompProject;