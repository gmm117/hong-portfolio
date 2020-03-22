import styled from 'styled-components';

export const LinkStyle = {
    display : 'inline-block',
    width : '100%',
    height : '100%',
    textDecoration: 'none'
};

export const LinkButtonStyle = styled.div`
    display : flex;
    align-items:center;
    justify-content: center;
    width : 70px;
    height : 25px;
    color : rgba(100,100,100,0.75);
    background : white;
    border : 1px solid rgba(100,100,100,0.75);
    border-radius : 3px;
    cursor : pointer;
    font-weight : 600;
    font-size : 15px;
`;

//////////////////////////// tile ui layout ///////////////////////////////
export const TileDiv = styled.div`
    display : flex;
    flex: 1;
    margin : 0 auto;
    max-width : 1280px;

    /* Tablet Device */
    @media screen and (min-width : 991px){
        width : 90%;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        width : 95%;
    }
`;

export const TileUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    color: #333;
    padding : 0px 25px;
    font-family: Noto Sans Medium,AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
`;

export const TileItemLi = styled.li`
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 76px 14px 0;
    text-align: center;
    margin: 0 auto;

    /* Mobile Device */
    @media screen and (min-width : 320px) {
        height: 200px;
        min-height: 200px;
        width: 200px;
        min-width: 200px;
    }

    /* Mobile Device */
    @media screen and (min-width : 321px) and (max-width : 767px) {
        height: 250px;
        min-height: 250px;
        width: 250px;
        min-width: 250px;
    }

    /* Tablet Device */
    @media screen and (min-width : 768px) and (max-width : 991px) {
        height: 300px;
        min-height: 300px;
        width: 300px;
        min-width: 300px;
    }

    /* Desktop Device */
    @media screen and (min-width : 992px) {
        height: 350px;
        min-height: 350px;
        width: 350px;
        min-width: 350px;
    }
`;

export const TileThumbDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 10px 0px;
    cursor: pointer;
    padding : ${props => (props.padding ? props.padding : '0px')};
    box-sizing: border-box;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

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

export const TileThumbHoverDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height : 100%;
    width : 100%;
    background : rgba(0, 0, 0, 0);
    opacity: 0;
    &:hover {
        background : rgba(0, 0, 0, 0.7);
        opacity : 1;
    }
`;

export const TileThumbHoverDivItem = styled.div`
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    height : 100%;
    font-size : 14px;
    color : white;
    font-weight : 800;

    div + div {
        margin-top : 10px;    
    }
`;

export const TileThumbItemDiv = styled.div`
    width: 100%;
    font-weight: 600;
`;

export const TileThumbImg = styled.img`
    width: 100%;
    height: 100%;
`;

////////////////////////////////////////////////////////////////////////////