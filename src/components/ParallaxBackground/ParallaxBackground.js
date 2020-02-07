import React from 'react';

import css from './style.module.css';

const ParallaxBackground = () => {
  return (
    <div className={css.parallax}>
      <div id={css.stars1} />
      <div id={css.stars2} />
      <div id={css.stars3} />
    </div>
  );
};

export default ParallaxBackground;
