import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/button/Button';

import styles from './hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Image
				src='/home/BgHero.svg'
				width={1134}
				height={1097}
				className={styles.vector}
				alt='hero'
			/>

			<div className={styles.info}>
				<h6>Санкт-Петербург</h6>
				<h1>Котейка</h1>
				<h5>Уютная гостиница для котов и кошек</h5>
				<Link href='/rooms' className={styles.link}>
					<Button text={`Забронировать`} />
				</Link>
			</div>
		</div>
	);
};

export default Hero;
