import React, { useState } from 'react';

export const Menubar = () => {
  const [route, setRoute] = useState(window.location.pathname);

  const handleNavigation = (path) => {
    window.history.pushState(null, '', path);
    setRoute(path);
  };
  const renderComponent = () => {
    switch (route) {
      case '/':
        return alert('Home page loaded');
      case '/luch-menu':
        return alert('luch menu page loaded');
      case '/home-packs':
        return alert('home packs page loaded');
      case '/gallery':
        return alert('gallery page loaded');
      case '/faq':
        return alert('FAQ page loaded');
      case '/contact-us':
        return alert('contact us page loaded');

      default:
        return alert('Unknown page type');
    }
  };

  return (
    <>
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
        <div
          onClick={() => handleNavigation('/luch-menu')}
          style={{
            padding: '0.5rem 1rem 0.5rem 1rem',
            background: 'white',
            color: 'black',
          }}>
          lunch menu
        </div>
        <div
          onClick={() => handleNavigation('/home-packs')}
          style={{ padding: '0.5rem 1rem 0.5rem 1rem' }}>
          home packs
        </div>
        <div
          onClick={() => handleNavigation('/gallery')}
          style={{ padding: '0.5rem 1rem 0.5rem 1rem' }}>
          gallery
        </div>
        <div
          onClick={() => handleNavigation('/faq')}
          style={{ padding: '0.5rem 1rem 1rem 1rem' }}>
          faq
        </div>
        <div
          onClick={() => handleNavigation('/contact-us')}
          style={{ padding: '0.5rem 1rem 1rem 1rem' }}>
          contact us
        </div>
      </div>

      <div> {renderComponent()}</div>
    </>
  );
};
