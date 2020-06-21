// Box Component
import React from 'react';
import useScrollPosition from './hooks/useScrollPosition';
import Navigation from "./navigation.js";
import Header from "./header.js"
const boxStyles = {
//   position: 'relative',
//   width: '100%',
//   top: 0,
//   left: 0
};

const handleScroll = () => {
  // Doesn't work in IE browser..
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
};
const ScrollToTop = () => {
  const scrollPos = useScrollPosition();
  const headerHeight = scrollPos;
  return (
    <div style={{ height: headerHeight, ...boxStyles }} onScroll={handleScroll}>
      {headerHeight >= 500 ? (
          <>
          <div
          style={{
            position: 'fixed',
            right: 50,
            bottom: 50,
            width: 35,
            height: 35,
            cursor: 'pointer',
            borderRadius: '5px',
            textAlign: 'center',
            paddingTop: '3px',
            backgroundColor: '#393452'
          }}
          onClick={handleScroll}
        >
          <span style={{ color: 'white', display: 'inline-block', padding: '5px 10px'}}>&#9650;</span>
        </div>
        <Navigation />
        </>
      ) : <Header />}
    </div>
  );
};

export default ScrollToTop;
