import React, { useContext } from 'react';
import HeaderButton from './HeaderButton';
import ThemeContext from'./ThemeContext';

function Header() {

  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <HeaderButton themes={themeContext}/>
    </div>
  );
}

export default Header;