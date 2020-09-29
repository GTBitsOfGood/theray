import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './progressBar';
import NextArrow from './NextArrow';

function Navigation(props) {
  const { children, progressBarColor, transitionTime } = props;

  const [pageIndex, changePageIndex] = useState(0);
  const [isScrolling, changeScrollState] = useState(false);

  const maxPages = Object.keys(children).length - 1;

  const pageContainer = useRef(null);

  useEffect(() => {
    pageContainer.current.style.transform = `translate(0, ${pageIndex * -100}%)`;
  });

  const pageUp = () => {
    if (pageIndex > 0) {
      changePageIndex(pageIndex - 1);
    }
  };

  const pageDown = () => {
    if (pageIndex < maxPages) {
      changePageIndex(pageIndex + 1);
    }
  };

  const onScroll = (event) => {
    if (!isScrolling) {
      changeScrollState(true);

      if (event.deltaY < 0) {
        pageUp();
      } else {
        pageDown();
      }

      setTimeout(() => {
        changeScrollState(false);
      }, transitionTime);
    }
  };

  /*
  const handleKeyDown = (event) => {
    if (event.keyCode === 38) {
      pageUp()
    }
    if (event.keyCode === 40) {
      pageDown()
    }
  }
  */

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <div
        ref={pageContainer}
        style={{
          height: '100%',
          width: '100%',
          transition: `transform ${transitionTime}ms ease-in-out`,
          outline: 'none',
        }}
        onWheel={onScroll}
      >
        {children}
      </div>

      <NextArrow goNextPage={pageDown} dark />
      <ProgressBar bgcolor={progressBarColor} completed={(pageIndex / (Object.keys(children).length - 1)) * 100} />
    </div>
  );
}

Navigation.propTypes = {
  children: PropTypes.arrayOf(React.Component),
  progressBarColor: PropTypes.string,
  transitionTime: PropTypes.number,
};

Navigation.defaultProps = {
  children: [],
  progressBarColor: '#6a1b9a',
  transitionTime: 1000,
};

export default Navigation;