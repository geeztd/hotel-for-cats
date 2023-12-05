'use client';

import Image from 'next/image';
import React from 'react';

import Button from '../button/Button';

import styles from './popUp.module.scss';

const Sucsess = ({ setOpen }) => {
	return (
		<div className={styles.sucsess}>
			<h3 className={styles.h}>Спасибо за заявку!</h3>
			<p className={styles.p}>Мы свяжемся с вами в ближайшее время</p>
			<div
				className={styles.but}
				onClick={() => {
					setOpen(false);
				}}
			>
				<Button text={`Ок`} type={3} />
			</div>
			<Image
				src='/home/aboute/footprint.svg'
				width={137}
				height={117}
				alt='print'
				className={styles.img}
			/>
		</div>
	);
};

export default Sucsess;
