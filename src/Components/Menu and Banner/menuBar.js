import React, { useState, useEffect } from 'react';
import { FlexContainerW80TM4, MenuBar } from '../../css';
import { Strings } from '../../common/strings';

export const Menubar = () => {
  const myMenus = ['lunch menu', 'home pack', 'gallery', 'faq', 'contact us'];

  const [route, setRoute] = useState(window.location.pathname);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isInitialRender) {
      renderComponent();
    } else {
      handleNavigation(`/${myMenus[0]}`);
      setIsInitialRender(false);
    }
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

  const renderComponent = () => {
    alert(`${myMenus[activeIndex]} ${Strings.pageLoaded}`.toUpperCase());
  };

  return (
    <FlexContainerW80TM4>
      {myMenus.map((menu, index) => (
        <MenuBar
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
        </MenuBar>
      ))}
    </FlexContainerW80TM4>
  );
};
