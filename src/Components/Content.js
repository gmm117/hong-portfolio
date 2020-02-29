import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


import Home from './Home';
import About from './About';

const ContentDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 0;
`;

class Content extends Component {
    render() {
        return(
            <ContentDiv>
                <Route path="/hong-portfolio/" component={Home} exact />
                <Route path="/hong-portfolio/About" component={About} />
                <Route path="/hong-portfolio/Company" component={About} />
                <Route path="/hong-portfolio/Apps" component={About} />
            </ContentDiv>
        );
    }
};

export default Content;
