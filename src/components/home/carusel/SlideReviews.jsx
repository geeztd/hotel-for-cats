import React from 'react';

import styles from './slide.module.scss';

const SlideReviews = ({ author, date, text }) => {
	return (
		<div className={styles.slide_reviews}>
			<p className={styles.kov}>``</p>
			<div className={styles.conteiner}>
				<p className={styles.text}>{text}</p>
				<div className={styles.box}>
					<span>{author}</span>
					<span>{date}</span>
				</div>
			</div>
		</div>
	);
};

export default SlideReviews;
