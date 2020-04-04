import styled, { css } from 'styled-components';


//////////////////////////// device layout //////////////////////////////////
// const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px'
// }

// export const device = {
//     mobileS: `(min-width: ${size.mobileS})`,
//     mobileM: `(min-width: ${size.mobileM})`,
//     mobileL: `(min-width: ${size.mobileL})`,
//     tablet: `(min-width: ${size.tablet})`,
//     laptop: `(min-width: ${size.laptop})`,
//     laptopL: `(min-width: ${size.laptopL})`,
//     desktop: `(min-width: ${size.desktop})`,
//     desktopL: `(min-width: ${size.desktop})`
// };

const deviceWInfo = {
    mobileS: {min : '320px', max : '375px'},
    mobileM: {min : '376px', max : '425px'},
    mobileL: {min : '426px', max : '768px'},
    tablet: {min : '769px', max : '991px'},
    desktop: {min : '992px'}
}

export const DeviceWidth = {
    mobileS: `screen and (min-width: ${deviceWInfo.mobileS.min}) and (max-width: ${deviceWInfo.mobileS.max})`,
    mobileM: `screen and (min-width: ${deviceWInfo.mobileM.min}) and (max-width: ${deviceWInfo.mobileM.max})`,
    mobileL: `screen and (min-width: ${deviceWInfo.mobileL.min}) and (max-width: ${deviceWInfo.mobileL.max})`,
    tablet: `screen and (min-width: ${deviceWInfo.tablet.min}) and (max-width: ${deviceWInfo.tablet.max})`,
    desktop: `screen and (min-width: ${deviceWInfo.desktop.min})`
 };

export const DeviceDirectWidth = ({min, max}) => {
    return `screen 
        ${min != null ? ' and (min-width: ' + min + ')' : ''}
        ${max != null ? ' and (max-width: ' + max + ')' : ''}`
}
export const DeviceDirectHeight = ({min, max}) => {
    return `screen 
    ${min != null ? ' and (min-height: ' + min + ')' : ''}
    ${max != null ? ' and (max-height: ' + max + ')' : ''}`
}
 
////////////////////////////////////////////////////////////////////////////

//////////////////////////// css ui layout ///////////////////////////////
export const LinkStyle = {
    display : 'inline-block',
    width : '100%',
    height : '100%',
    textDecoration: 'none'
};

export const DirectWidthSizeStyle = (width) => css`
    width: ${width};
    min-width : ${width};
`;

export const DirectHeightSizeStyle = (height) => css`
    height: ${height};
    min-height : ${height};
`;

export const DirectSizeStyle = ({width, height}) => css`
    width: ${width};
    min-width : ${width};
    height: ${height};
    min-height : ${height};
`

export const DimensionDiv = styled.div`
    width : ${props => (props.width ? props.width : null)};
    height : ${props => (props.height ? props.height : null)};
`;

export const AutoLayoutDiv = styled.div`
    width : 100%;
    height : 100%;
`;

//////////////////////////// tile ui layout ///////////////////////////////
export const TileDiv = styled.div`
    display : flex;
    flex: 1;
    margin : 0 auto;
    max-width : 1550px;

    @media ${DeviceDirectWidth( { max : '991px' })} {
        width : 90%;
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '992px' })} {
        width : 95%;
    }
`;

export const TileUl = styled.ul`
    display: flex;
    width:100%;
    flex-wrap: wrap;
    -webkit-box-lines: multiple; 
    -ms-flex-wrap: wrap; 
    flex-wrap: wrap;
    box-sizing: border-box;
    color: #333;
    font-family: Noto Sans Medium,AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;

    @media ${DeviceDirectWidth( { max : '320px' })} {
        padding : 0px 5px;
    }

    @media ${DeviceDirectWidth( { min : '321px', max : '375px' })} {
        padding : 0px 10px;
    }

    @media ${DeviceDirectWidth( { min : '376px' })} {
        padding : 0px 25px;
    }
`;

export const TileItemLi = styled.li`
    display : flex;
    flex-direction: column;
    align-items: center;
    padding: 76px 14px 0;
    text-align: center;
    margin: 0 auto;

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '0', max : '320px' })} {
        ${DirectSizeStyle({ width : '200px', height : '200px' })}; 
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '321px', max : '500px' })} {
        ${DirectSizeStyle({ width : '250px', height : '250px' })}; 
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '501px', max : '767px' })} {
        ${DirectSizeStyle({ width : '300px', height : '300px' })}; 
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth( { min : '768px', max : '991px' })} {
        ${DirectSizeStyle({ width : '350px', height : '350px' })}; 
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '992px' })} {
        ${DirectSizeStyle({ width : '400px', height : '400px' })}; 
    }
`;

export const TileThumbDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 10px 0px;
    cursor: pointer;
    padding : ${props => (props.padding ? props.padding : '0px')};
    border-radius : ${props => (props.radius ? props.radius : null)};
    box-sizing: border-box;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '0', max : '320px' })} {
        ${DirectHeightSizeStyle('200px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '321px', max : '500px' })} {
        ${DirectHeightSizeStyle('250px')};
    }

    /* Mobile Device */
    @media ${DeviceDirectWidth( { min : '501px', max : '767px' })} {
        ${DirectHeightSizeStyle('300px')};
    }

    /* Tablet Device */
    @media ${DeviceDirectWidth( { min : '768px', max : '991px' })} {
        ${DirectHeightSizeStyle('350px')};
    }

    /* Desktop Device */
    @media ${DeviceDirectWidth( { min : '992px' })} {
        ${DirectHeightSizeStyle('400px')};
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
    border-radius : 5px;
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
    border-radius : ${props => (props.radius ? props.radius : null)};
`;

////////////////////////////////////////////////////////////////////////////

//////////////////////////// tile ui layout ///////////////////////////////
export const ItemUl = styled.ul`
    width : 100%;
    max-width: 1000px;
    display : flex;
    justify-content : center;
    align-items : center;
    margin: 0 auto;
    flex-direction : column;
    box-sizing: border-box;
    padding: 20px;  

    li + li {
        margin-top : 20px;
    }
`;

////////////////////////////////////////////////////////////////////////////

//////////////////////////// title layout //////////////////////////////////
export const FeatureTitle = (size) => css`
    &:before {
        left: 0;
        position: absolute;
        top: 50%;
        display: block;
        width: ${size};
        border-bottom: 5px solid rgba(0, 0, 0, 0.25);
        content: "";
    }
    &:after {
        right: 0;
        position: absolute;
        top: 50%;
        display: block;
        width: ${size};
        border-bottom: 5px solid rgba(0, 0, 0, 0.25);
        content: "";
    }
`;
////////////////////////////////////////////////////////////////////////////
