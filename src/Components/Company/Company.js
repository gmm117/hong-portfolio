import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { LinkStyle } from '../Utils/CommonStyle';
import { BaseURL } from '../Utils/Define';

import bluebirdlogo from '../../../imgs/bluebirdsoft_logo.png';
import hancom_logo from '../../../imgs/hancom_logo.png';
import osstem_logo from '../../../imgs/osstem_logo.png';

const CompanyDiv = styled.div`
    display : flex;
    flex: 1;
    height : 100%;
`;

const ListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    color: #333;
    padding : 0px 25px;
    font-family: Noto Sans Medium,AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
`;

const ListItemLi = styled.li`
    display : flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    padding: 76px 14px 0;
    text-align: center;
`;

const ThumbDiv = styled.div`
    display : flex;
    align-items: center;
    flex: 1 0 0%;
    width: 100%;
    height: 210px;
    margin: 10px 0px;
    cursor: pointer;
    padding : ${props => (props.padding ? props.padding : '0px')};
    box-sizing: border-box;
    box-shadow: 0 1px 15px rgba(0,21,41,0.08);
    position: relative;
`;

const ThumbItemDiv = styled.div`
    width: 100%;
    height: 100%;
    font-weight: 600;
`;

const ThumbImg = styled.img`
    width: 100%;
    height: 100%;
`;

class Company extends Component {
    constructor(props) {
        super(props);

        const { location } = this.props;
        this.props.onLocationChange(location);
    }

    render() {
        return (
            <CompanyDiv>
                <ListUl>
                    <ListItemLi>
                        <ThumbDiv>
                            <Link style={LinkStyle} to={`${BaseURL}/Company/Hancom`}>
                                <ThumbImg src={hancom_logo} alt="Hancom Group Logo" />
                            </Link>
                        </ThumbDiv>
                        <ThumbItemDiv>한글과컴퓨터</ThumbItemDiv>
                    </ListItemLi>
                    <ListItemLi>
                        <ThumbDiv padding={'35px'}>
                            <Link style={LinkStyle} to={`${BaseURL}/Company/OsstemImplant`}>
                                <ThumbImg src={osstem_logo} alt="Osstem Implant Logo" />
                            </Link>
                        </ThumbDiv>
                        <ThumbItemDiv>오스템임플란트</ThumbItemDiv>
                    </ListItemLi>
                    <ListItemLi>
                        <ThumbDiv padding={'45px'}>
                            <Link style={LinkStyle} to={`${BaseURL}/Company/Bluebird`}>
                                <ThumbImg src={bluebirdlogo} alt="Bluebird Logo" />
                            </Link>
                        </ThumbDiv>
                        <ThumbItemDiv>블루버드소프트</ThumbItemDiv>
                    </ListItemLi>
                </ListUl>
            </CompanyDiv>
        );
    }
};

export default Company;