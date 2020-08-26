import React from 'react';

import css from './style.module.css';

const SocialIcons = () => {
  return (
    <div className={`${css.social_icons} ${css.animate_icons}`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/krsntn"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/ooneoneo"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/krsn6"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/kah-zhan-tan-b46aa6b9/"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://chrome.google.com/webstore/detail/youtube-speed-control-hot/opcjoeippmphadnkmkjocmingcbpmepn"
      >
        <i className="fab fa-chrome"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
