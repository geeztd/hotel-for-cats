'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './burger.module.scss';

const Burger = () => {
	const menuAnimate = {
		open: {
			transform: 'translateX(100%)',
			opacity: 0,
			position: 'absolute',
		},
		close: {
			transform: 'translateX(0%)',
			opacity: 1,
			position: 'fixed',
		},
	};
	const [isClick, setClick] = useState(true);
	return (
		<div className={styles.burger_nav}>
			<div className={styles.burger_off} onClick={() => setClick(!isClick)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<motion.div
				className={styles.box}
				animate={isClick ? 'open' : 'close'}
				initial={'open'}
				variants={menuAnimate}
				transition={{ type: 'just' }}
			>
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
					<motion.div whileHover={{ scale: 1.2 }}>
						<Link
							className={styles.link}
							href='/'
							onClick={() => setClick(!isClick)}
						>
							Почему мы?
						</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.2 }}>
						<Link
							className={styles.link}
							href='/rooms'
							onClick={() => setClick(!isClick)}
						>
							Номера
						</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.2 }}>
						<Link
							className={styles.link}
							href='/#aboute'
							onClick={() => setClick(!isClick)}
						>
							Почему мы?
						</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.2 }}>
						<Link
							className={styles.link}
							href='/#com'
							onClick={() => setClick(!isClick)}
						>
							Отзывы
						</Link>
					</motion.div>
				</nav>
			</motion.div>
		</div>
	);
};

export default Burger;
