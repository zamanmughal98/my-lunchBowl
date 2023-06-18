import React, { useState, useEffect } from 'react';
import { FlexContainerW80TM4, MenubarWraper } from '../../css';
import { myMenus } from '../../common/arrays';

export const Menubar = ({ getCurrentPage: sendCurrentPageToApp }) => {
  const [route, setRoute] = useState(`/${myMenus[0]}`);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    handleNavigation(`/${myMenus[0]}`);
  }, []);

  useEffect(() => {
    sendCurrentPageToApp(myMenus[activeIndex]);
  }, [route]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const convertToCamelCase = (str) =>
    str
      .toLowerCase()
      .split(' ')
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
      )
      .join('');

  const handleNavigation = (path) => {
    const camelCasePath = convertToCamelCase(path);

    window.history.pushState(null, '', camelCasePath);
    setRoute(camelCasePath);
  };

  return (
    <FlexContainerW80TM4>
      {myMenus.map((menu, index) => (
        <MenubarWraper
          border={index === activeIndex ? '2px solid orange' : 'none'}
          borderBottomLeftRadius={index === activeIndex ? '20px' : 'none'}
          borderBottomRightRadius={index === activeIndex ? '20px' : 'none'}
          background={index === activeIndex ? 'white' : 'orange'}
          color={index === activeIndex ? 'orange' : 'white'}
          key={index}
          onClick={() => {
            handleNavigation(`/${menu}`);
            handleClick(index);
          }}>
          {menu}
        </MenubarWraper>
      ))}
    </FlexContainerW80TM4>
  );
};
