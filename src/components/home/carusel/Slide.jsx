import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/button/Button';

import styles from './slide.module.scss';

const Slide = ({ name, space, size, cost, img, slug }) => {
	return (
		<div className={styles.slide}>
			<Image
				width={10000}
				height={1000}
				alt='cat'
				src={img}
				className={styles.img}
			/>
			<Link href={`/rooms/${slug}`}>
				<div className={styles.aboute}>
					<div className={styles.box}>
						<h2>{name}</h2>
						<ul>
							<li>Площадь - {space}м²</li>
							<li>Размеры - {size}</li>
							<li>Цена за сутки - {cost}₽</li>
						</ul>
						<Button text={`Забронировать`} type={0} />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Slide;
