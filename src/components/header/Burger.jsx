'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './burger.module.scss';

const Burger = () => {
	const [isClick, setClick] = useState(true);
	return (
		<div className={styles.burger_nav}>
			<div className={styles.burger_off} onClick={() => setClick(!isClick)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{isClick ? (
				<></>
			) : (
				<div className={styles.box}>
					<div className={styles.head}>
						<Image src='/logo.svg' width={63} height={52} alt='logo' />
						<div
							className={styles.burger_on}
							onClick={() => setClick(!isClick)}
						>
							<span className={styles.span1}></span>
							<span className={styles.span2}></span>
						</div>
					</div>
					<nav className={styles.nav}>
						<Link className={styles.link} href='/'>
							Почему мы?
						</Link>
						<Link className={styles.link} href='/'>
							Номера
						</Link>
						<Link className={styles.link} href='/'>
							Отзывы
						</Link>
						<Link className={styles.link} href='/'>
							Как нас найти
						</Link>
					</nav>
				</div>
			)}
		</div>
	);
};

export default Burger;
