import Image from 'next/image';
import React from 'react';

import Button from '@/components/button/Button';

import styles from './slide.module.scss';

const Slide = ({ name, space, size, cost, src }) => {
	return (
		<div className={styles.slide}>
			<Image
				width={10000}
				height={1000}
				alt='cat'
				src={src}
				className={styles.img}
			/>
			<div className={styles.aboute}>
				<div className={styles.box}>
					<h2>{name}</h2>
					<ul>
						<li>Площадь - {space}</li>
						<li>Размеры(Ш*Г*В) - {size}</li>
						<li>Цена за сутки - {cost}р</li>
					</ul>
					<Button />
				</div>
			</div>
		</div>
	);
};

export default Slide;
