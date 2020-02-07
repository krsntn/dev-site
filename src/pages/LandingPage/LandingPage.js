import React from 'react';
import Nav from '../../components/Nav';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import pic from '../../components/images/pic.png';

import css from './style.module.css';

const LandingPage = () => {
	return (
		<div className={`${css.landing_page} landing-page`}>
			<Nav />
			<main>
				<div className={css.pic}>
					<img src={pic} alt="" style={{ borderRadius: '50%' }} />
				</div>
				<div className={css.intro_name}>
					<span role="img" aria-label="emoji">
						👋
					</span>
					I'm Karson!
				</div>
				<div className={css.tagline}>
					Front End Dev | Open-Source Enthusiast | Ninja
				</div>
				<SocialIcons />
			</main>
			<ScrollToNext pageSelector=".about-page" direction="down" />
		</div>
	);
};

export default LandingPage;
