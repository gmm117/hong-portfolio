import React, { Component } from 'react';
import styled from 'styled-components';

class CompProject extends Component {
    constructor(props) {
        super(props);

        const { location } = this.props;
        this.props.onLocationChange(location);
    }

    render() {
        return(
            <div>준비중입니다.</div>
        );
    }
};

export default CompProject;