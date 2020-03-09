import React, { Component } from 'react';
import styled from 'styled-components';

// import {GetWebHwpImage} from './Hancom/CompHancom';
import webhwp_main from '../../../imgs/webhwp_main.png';

const CompUl = styled.ul`
    width : 100%;
    height : 100%;
    display : flex;
    padding : 35px;
    box-sizing: border-box;
`;

const CompLi = styled.li`
    width : 100%;
    height : 500px;
`;

const CompTitleDiv = styled.div`
    font-size : 20px;
    font-weight : 600;
    margin-bottom: 10px;
`;

const CompContentDiv = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
`;

const CompImgDiv = styled.div`
    width : 500px;
    min-width : 500px;
    height : 500px;
    min-height : 500px;

    div + div {
        margin-top : 10px;
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
    height : 350px;
`;

const CompDetailBottom = styled.div`
    width : 100%;
    height : 30px;
`;


class CompProject extends Component {
    constructor(props) {
        super(props);

        const { location } = this.props;
        this.props.onLocationChange(location);
    }

    render() {
        return(
            <CompUl>
                <CompLi>
                    <CompTitleDiv>웹한글/웹한글기안기</CompTitleDiv>
                    <CompContentDiv>
                        <CompImgDiv>
                            <CompImgTitleDiv>
                                <CompImgTitleImg src={webhwp_main} alt="웹한글 메인화면" />
                            </CompImgTitleDiv>
                            <CompImgThumDiv>

                            </CompImgThumDiv>
                        </CompImgDiv>
                        <CompDetailDiv>
                            <CompDetailTop>

                            </CompDetailTop>
                            <CompDetailBottom>

                            </CompDetailBottom>
                        </CompDetailDiv>
                    </CompContentDiv>
                </CompLi>
            </CompUl>
        );
    }
};

export default CompProject;