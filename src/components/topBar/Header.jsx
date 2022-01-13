import { AppProvider, Frame, TopBar } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';
import logo from '../../assets/logo.svg'
import profileImg from '../../assets/profileImg.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const profileData = useSelector(state => state.profile)

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const theme = {
    logo: {
      width: 124,
      topBarSource:
        'https://www.prpl.io/wp-content/uploads/2019/03/Group-9.png',
      accessibilityLabel: 'purple-logo',
    },
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
    actions={[
      {
        items: [{content: <Link to='/edit'><span>Edit</span></Link>,}],
      }
    ]}
    open={isUserMenuOpen}
    onToggle={toggleIsUserMenuOpen}
    avatar={profileData.avatarImg}
    />
  );
  
  return (
      <div style={{height: '100px'}}>
    <AppProvider
      theme={theme}
    >
      <TopBar userMenu={userMenuMarkup}/>
    </AppProvider>
  </div>
  );
};

export default Header;