import React, { Component } from 'react';
import { TileDiv, TileUl, TileItemComponentItem } from '../styles/CommonStyle';
import { baseURL } from '../../datas/utils/define';

import bluebirdlogo from '../../../imgs/bluebirdsoft_logo.png';
import hancom_logo from '../../../imgs/hancom_logo.png';
import osstem_logo from '../../../imgs/osstem_logo.png';

const companyDatas = [
    { radius: '5px', src: hancom_logo, alt: "Hancom Group Logo", to: `${baseURL}/Company-Hancom`, name: '한글과컴퓨터', product: '웹한글/웹한글기안기', period: '2016.12 ~', footname: '한글과컴퓨터' },
    { radius: '5px', padding: '35px', src: osstem_logo, alt: "Osstem Implant Logo", to: `${baseURL}/Company-OsstemImplant`, name: '오스템임플란트', product: '치과용 프로그램', period: '2013.04 ~ 2016.12', footname: '오스템임플란트' },
    { radius: '5px', padding: '45px', src: bluebirdlogo, alt: "Bluebird Logo", to: `${baseURL}/Company-Bluebird`, name: '블루버드소프트', product: '산업용 PDA개발', period: '2010.06 ~ 2012.04', footname: '블루버드소프트' }
];

class Company extends Component {
    constructor(props) {
        super(props);

        const { location } = this.props;
        this.props.onLocationChange(location);
    }

    render() {
        return (
            /* jshint ignore:start */
            <TileDiv>
                <TileUl>
                    {
                        companyDatas.map(({ radius, padding, src, alt, style, to, name, product, period, footname }, index) => 
                            <TileItemComponentItem key={index} radius={radius} padding={padding} src={src} alt={alt} style={style} to={to} name={name} product={product} period={period} footname={footname} />
                        )
                    }
                </TileUl>
            </TileDiv>
            /* jshint ignore:end */
        );
    }
}

export default Company;