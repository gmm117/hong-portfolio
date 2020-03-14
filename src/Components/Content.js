import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


import Home from './Home';
import About from './About';

import { BaseURL } from './Utils/Define';
import Company from './Company/Company';
import CompProject from './Company/CompProject';

const ContentDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 0;
`;

function Content( {onLocationChange}) {
    return(
        <ContentDiv>
            <Route exact path={`${BaseURL}/About`} component={( {location, match, history} ) => <About onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
            <Switch>
                <Route exact path={`${BaseURL}/Company-:name`} component={( {location, match, history} ) => <CompProject onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
                <Route exact path={`${BaseURL}/Company`} component={( {location, match, history} ) => <Company onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
            </Switch>
            <Route exact path={`${BaseURL}/Apps`} component={( {location, match, history} ) => <About onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
            <Route exact path={`${BaseURL}/`} component={( {location, match, history} ) => <Home onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
        </ContentDiv>
    );
}

export default Content;
