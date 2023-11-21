import Image from 'next/image';
import React from 'react';

import styles from './button.module.scss';

const Button = () => {
	return (
		<div className={styles.button}>
			<h3 className={styles.h}>Забронировать</h3>
			<Image
				className={styles.img}
				src='/home/button.svg'
				width={36}
				height={36}
				alt='step'
			/>
		</div>
	);
};

export default Button;
