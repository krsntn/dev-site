import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';

import css from './style.module.css';

const AboutPage = () => {
  return (
    <div className={`${css.about_page} about-page`}>
      <div className={css.content_grid}>
        <h1>About</h1>
        <div className={css.about_wrapper}>
          <div className={css.about_content}>
            <p>
              I like <span className={css.highlight}>JavaScript</span> and
              everything in web.
            </p>
            <p>
              When my dev senses kick-in I build presumably{' '}
              <span className={css.highlight}> awesome stuff</span>. I constantly learning new things when I have time.  I stay close to
              the community and try to keep tabs with the pace at which the web
              is evolving.
            </p>
            <p>
              I built this site <span className={css.highlight}>from scratch</span>.
              By scratch, I mean absolutely from scratch{' '}
              <span className={css.highlight}>
                without any UI library/framework
              </span>{' '}
              (except React though) and had so much fun along the way.
            </p>
            <p>
              I am also obsessed with making the web look pretty with CSS.
            </p>
            <p className={css.text_emoji}>
              ¯\_(ツ)_/¯
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" direction="down" />
    </div >
  );
};

export default AboutPage;
