import React from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import css from './style.module.css';

const ScrollToNext = props => {
	return (
		<div
			className={css.scroll_to_next}
			onClick={() => scrollToNextElement(props)}
		>
			<div className={`${css.arrow} ${css.bounce}`}>
				<i
					className={`fas fa-angle-${
						props.direction === 'down' ? 'down' : 'double-up'
					} fa-3x`}
					href="#"
				/>
			</div>
		</div>
	);
};

const scrollToNextElement = props => {
	const { pageSelector } = props;
	const nextPage = document.querySelector(pageSelector);
	scrollToElement(nextPage);
};

export default ScrollToNext;
