import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import portfolioItems from './portfolio-items.json';

import css from './style.module.scss';

const PortfolioPage = () => {
  return (
    <div className={`${css.portfolio_page} portfolio-page`}>
      <div className={css.content_grid}>
        <h1>Portfolio</h1>

        <div className={css.portfolio_wrapper}>
          {portfolioItems.map((item, i) => (
            <div className={css.portfolio_item} key={i}>
              <div
                className={css.portfolio_item_cover}
                style={{
                  background: `url(https://source.unsplash.com/random?sig=${i}/800x453/)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <div className={css.portfolio_item_mask}>
                <div className={css.portfolio_item_links}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={item.link.href}
                  >
                    {item.link.text}
                  </a>
                </div>
              </div>

              <div className={css.portfolio_item_content}>
                <div className={css.portfolio_item_title}>{item.title}</div>

                <div className={css.portfolio_item_desc}>
                  {item.description}
                </div>

                <div className={css.portfolio_item_icon}>
                  {item.icons.map((item, i) => {
                    const fontawesomeClass = item.slice(0, 3);
                    const icon = item.slice(4);
                    return (
                      <i
                        className={`${fontawesomeClass} fa-${icon}`}
                        style={{ fontSize: '1.25rem', margin: '0 5px' }}
                        key={i}
                      ></i>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToNext pageSelector='.landing-page' direction='up' />
    </div>
  );
};

export default PortfolioPage;
