import { AppProvider, Frame, TopBar } from '@shopify/polaris';
import React from 'react';
import logo from '../../assets/logo.svg'
import profileImg from '../../assets/profileImg.png'


const Header = () => {

    const theme = {
      logo: {
        width: 124,
        topBarSource:
          {logo},
        accessibilityLabel: 'purple-logo',
      },
    };
  
    const userMenuMarkup = (
      <TopBar.UserMenu
        avatar={profileImg}
      />
    );
  
    const topBarMarkup = (
      <TopBar
        userMenu={userMenuMarkup}
      />
    );
    
    return (
        <div style={{height: '100px'}}>
      <AppProvider
        theme={theme}
      >
        <Frame topBar={topBarMarkup} 
        />
      </AppProvider>
    </div>
    );
};

export default Header;