import React, { useState, useEffect } from 'react';

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
    alert(`${myMenus[activeIndex]} page loaded`.toUpperCase());
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
        marginTop: '4rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'orange',
        textTransform: 'uppercase',
      }}>
      {myMenus.map((menu, index) => (
        <div
          key={index}
          style={{
            cursor: 'pointer',
            padding: '0.5rem 1rem 0.5rem 1rem',
            border: index === activeIndex ? '2px solid orange' : 'none',
            borderBottomLeftRadius: index === activeIndex ? '20px' : 'none',
            borderBottomRightRadius: index === activeIndex ? '20px' : 'none',
            backgroundColor: index === activeIndex ? 'white' : 'orange',
            color: index === activeIndex ? 'orange' : 'white',
          }}
          onClick={() => {
            handleNavigation(`/${menu}`);
            handleClick(index);
          }}>
          {menu}
        </div>
      ))}
    </div>
  );
};
