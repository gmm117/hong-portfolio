import React, { Component } from 'react';
import styled from 'styled-components';
import '../assets/index.scss';

import { GetLinkName } from './Components/Utils/Utils';
import Header from './Components/Header';
import SideBar from './Components/Menu/SideBar';
import Content from './Components/Content';

const ContainerDiv = styled.div`
    display: flex;  
    width: 100%;
    height : 100%;
    color: rgba(100, 100, 100, 0.75);
`;

const ContentDiv = styled.div`
  width: 100%;
  height : 100%;
  position: relative;
  overflow: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navName : "Home", isSidebarOpen : true };
    this.setNavName = this.setNavName.bind(this);
    this.setSideBarOpen = this.setSideBarOpen.bind(this);
  }
  setSideBarOpen() {
    this.setState({
      ...this.state,
      isSidebarOpen: !this.state.isSidebarOpen
    });
  }

  setNavName(name) {
    this.setState({
      ...this.state,
      navName: name
    });
  }

  render() {
    const onSidebarChnage = () => {
      this.setSideBarOpen();
    };

    const onLocationChange = (location) => {
      var name = GetLinkName(location.pathname);
      if(name !== this.state.navName) {
        this.setNavName(name);
      }
    }

    return (
      <ContainerDiv>
        <SideBar 
          isSidebarOpen={this.state.isSidebarOpen}
        />
        <ContentDiv>
          <Header 
            navName={this.state.navName} 
            onSidebarChange={onSidebarChnage}
          />
          <Content onLocationChange={onLocationChange}/>
        </ContentDiv>
      </ContainerDiv>
    );
  }
};

export default App;
