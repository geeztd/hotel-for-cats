import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Nav from '@/components/header/Nav';

import data from './data.json';
import dataSvg from './dataSvg.json';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer>
			<div className={styles.footer}>
				<h1>Как нас найти</h1>
				<div className={styles.box}>
					<div className={styles.item}>
						<h3>Социальные сети</h3>
						<div className={styles.sn}>
							{dataSvg.map((item) => (
								<Link href='/' key={item.path}>
									<Image
										width={item.width}
										height={item.height}
										src={item.path}
										alt={item.alt}
									/>
								</Link>
							))}
						</div>
					</div>
					{data.map((item) => (
						<div className={styles.item} key={item.head}>
							<h3>{item.head}</h3>
							<p>{item.body}</p>
						</div>
					))}
				</div>
			</div>
			<Nav isFooter={true} />
			<div className={styles.copy}>
				<span>© 2023 Все права защищены</span>
				<span>Политика конфиденциальности</span>
			</div>
		</footer>
	);
};

export default Footer;
