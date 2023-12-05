'use client';

import { motion } from 'framer-motion';
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
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link className={styles.link} href='/'>
							Почему мы?
						</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link className={styles.link} href='/rooms'>
							Номера
						</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link className={styles.link} href='/#aboute'>
							Почему мы?
						</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link className={styles.link} href='/#com'>
							Отзывы
						</Link>
					</motion.div>
				</nav>
			) : (
				<Burger />
			)}
		</div>
	);
};

export default Nav;
