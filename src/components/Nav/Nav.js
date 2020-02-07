import React from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import css from './style.module.css';

const Nav = () => {
  return (
    <nav>
      <div
        className={css.menu_item}
        onClick={(e) => scrollToPage('.about-page')}
      >
        About
          </div>
      <div
        className={css.menu_item}
        onClick={(e) => scrollToPage('.portfolio-page')}
      >
        Portfolio
          </div>
    </nav>
  );
}

const scrollToPage = (pageSelector) => {
  const nextPage = document.querySelector(pageSelector);
  scrollToElement(nextPage);
}

export default Nav;
