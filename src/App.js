import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import '../assets/index.scss';

import { GetLinkName } from './Components/Utils/Utils';
import { BaseURL } from './Components/Utils/Define';

import Header from './Components/Header';
import SideBar from './Components/Menu/SideBar';
import Content from './Components/Content';

const ContainerDiv = styled.div`
    display: flex;  
    width: 100%;
    height : 100%;
    color: rgba(100, 100, 100, 0.75);
    overflow : hidden;
`;

const ContentDiv = styled.div`
    width: 100%;
    height : 100%;
    overflow : auto;
    position: relative;
`;

function App() {
  const [appState, setAppState] = useState({
    navName : "Home", 
    isSidebarOpen : true
  });

  const {navName, isSidebarOpen} = appState;

  const setSideBarOpen = useCallback(() => {
    setAppState(prevState => ({
      ...prevState,
      isSidebarOpen: !prevState.isSidebarOpen
    }));
  }, [isSidebarOpen]);

  const setNavName = useCallback((name) => {
    setAppState(prevState => ({
      ...prevState,
      navName: name
    }));
  }, [navName]);

  const onSidebarChnage = useCallback(() => {
    setSideBarOpen();
  }, []);

  const onLocationChange = useCallback((location) => {
    var name = GetLinkName(location.pathname);
    name = name.replace(BaseURL, "");
    if(name !== navName) {
      setNavName(name);
    }
  }, [navName]);

  return (
    <ContainerDiv>
      <SideBar 
        isSidebarOpen={isSidebarOpen}
      />
      <ContentDiv>
        <Header 
          navName={navName} 
          onSidebarChange={onSidebarChnage}
        />
        <Content onLocationChange={onLocationChange}/>
      </ContentDiv>
    </ContainerDiv>
  );
};

export default App;
