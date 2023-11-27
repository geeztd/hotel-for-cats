'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Burger from './Burger';
import styles from './nav.module.scss';
import useMediaQuery from '@/hook/useMediaQuery';

const Nav = ({ isFooter }) => {
	const isMobile = useMediaQuery('(min-width: 768px)');

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Image src='/logo.svg' width={63} height={52} alt='logo' />
			</div>
			{isMobile || isFooter ? (
				<nav className={styles.nav}>
					<Link className={styles.link} href='/'>
						Главная
					</Link>
					<Link className={styles.link} href='/rooms'>
						Номера
					</Link>
					<Link className={styles.link} href='/#aboute'>
						Почему мы?
					</Link>
					<Link className={styles.link} href='/#com'>
						Отзывы
					</Link>
				</nav>
			) : (
				<Burger />
			)}
		</div>
	);
};

export default Nav;
