'use client';

import { motion, transform } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import data from './aboute.json';
import styles from './aboute.module.scss';

const Aboute = () => {
	return (
		<div className={styles.aboute} id='aboute'>
			<Image
				src='/home/aboute/footprint.svg'
				width={299}
				height={346}
				alt='footprint'
				className={styles.footprint}
			/>
			<h1 className={styles.heading}>Почему мы?</h1>
			<div className={styles.box}>
				{data.map((item) => (
					<motion.div
						className={styles.item}
						initial={{ y: 100, opacity: 0.6 }}
						whileInView={{ y: 0, opacity: 1 }}
						key={item.heading}
					>
						<Image
							src={item.imgPath}
							width={91}
							height={91}
							alt={item.heading}
							className={styles.img}
						/>
						<h2 className={styles.h}>{item.heading}</h2>
						<p className={styles.p}>{item.paragraph}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Aboute;
