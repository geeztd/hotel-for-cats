import Image from 'next/image';
import React from 'react';

import styles from './banner.module.scss';

const Banner = () => {
	return (
		<div className={styles.banner}>
			<Image
				src='/banner/print.svg'
				height={200}
				width={200}
				alt=''
				className={styles.img}
			/>
			<div className={styles.text}>
				<h2 className={styles.h2}>Каждый 7-ой день</h2>
				<h3 className={styles.h3}>бесплатно</h3>
				<p className={styles.p}>
					Акция действует при размещении в номерах “Люкс” и “Супер-Люкс”
				</p>
			</div>
		</div>
	);
};

export default Banner;
