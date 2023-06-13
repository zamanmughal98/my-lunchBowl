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

  const handleNavigation = (path) => {
    window.history.pushState(null, '', path);
    setRoute(path);
  };

  const renderComponent = () => {
    alert(`${myMenus[activeIndex]} page loaded`);
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
            backgroundColor: index === activeIndex ? 'white' : 'orange',
            color: index === activeIndex ? 'orange' : 'white',
            padding: '0.5rem 1rem 0.5rem 1rem',
            cursor: 'pointer',
            border: index === activeIndex ? '2px solid orange' : 'none',
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
