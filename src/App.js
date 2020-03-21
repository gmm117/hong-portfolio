import React, { useCallback, useReducer, createContext } from 'react';
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

function reducer(state, action) {
  switch(action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen };
      case "CHANGE_NAVIGATOR_NAME":
        if(action.navName === state.navName)
          return state;

        return {
          ...state,
          navName: action.navName };
    default:
      return state ;
  }
}

export const DispatchContext = createContext(null);

function App() {
  const [appState, dispatch] = useReducer(reducer, {
    navName : "Home", 
    isSidebarOpen : true,
  });

  const {navName, isSidebarOpen} = appState;

  const onLocationChange = useCallback((location) => {
    var name = GetLinkName(location.pathname);
    name = name.replace(BaseURL, "");
    dispatch({
      type : "CHANGE_NAVIGATOR_NAME",
      navName : name
    });
  }, [navName]);

  return (
    <ContainerDiv>
      <SideBar 
        isSidebarOpen={isSidebarOpen}
      />
      <ContentDiv>
        <DispatchContext.Provider value={dispatch}>
          <Header 
            navName={navName}
          />
        </DispatchContext.Provider>
        <Content onLocationChange={onLocationChange}/>
      </ContentDiv>
    </ContainerDiv>
  );
};

export default App;
