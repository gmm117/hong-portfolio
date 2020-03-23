import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { BaseURL } from './Utils/Define';

import Home from './Home';
import About from './About';

import Company from './Company/Company';
import CompanyItem from './Company/CompanyItem';

import Experience from './Experience/Experience';
import ExperienceItem from './Experience/ExperienceItem';


const ContentDiv = styled.div`
    width: 100%;
    height : ${props => (props.cheight + "px")} ;
    background: white;
`;

function Content( { onLocationChange }) {
    const [cheight, setCHeight] = useState(0);

    useEffect(() => {
        setCHeight(window.innerHeight - 50);
    }, [cheight]); 

    window.addEventListener('resize', function(e) {
        setCHeight(window.innerHeight - 50);
    });

    return(
        <ContentDiv cheight={cheight}>
            <Route exact path={`${BaseURL}/About`} component={( {location, match, history} ) => <About onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
            <Switch>
                <Route exact path={`${BaseURL}/Company-:name`} component={( {location, match, history} ) => <CompanyItem onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
                <Route exact path={`${BaseURL}/Company`} component={( {location, match, history} ) => <Company onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
            </Switch>
            <Switch>
                <Route exact path={`${BaseURL}/Experience-:name`} component={( {location, match, history} ) => <ExperienceItem onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
                <Route exact path={`${BaseURL}/Experience`} component={( {location, match, history} ) => <Experience onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
            </Switch>
            <Route exact path={`${BaseURL}/`} component={( {location, match, history} ) => <Home onLocationChange={onLocationChange} location={location} match={match} history={history} />} />
        </ContentDiv>
    );
}

export default Content;
