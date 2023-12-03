import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/button/Button';

import styles from './catalog.module.scss';

const Catalog = ({ rooms }) => {
	return rooms.length === 0 ? (
		<div className={styles.null}>
			<h1>По выбранным критериям ничего не найдено</h1>
			<Image
				src='/not_found.png'
				width={800}
				height={800}
				alt='cat'
				className={styles.img}
			/>
		</div>
	) : (
		<div className={styles.catalog}>
			{rooms.map((item) => (
				<Link href={`/rooms/${item.slug}`} key={item.name}>
					<div className={styles.item}>
						<Image
							src={item.img}
							alt={item.name}
							width={270}
							height={185}
							className={styles.img}
						/>
						<div className={styles.info}>
							<h4>{item.name}</h4>
							<p>Размеры - {item.size}</p>
							<p>
								Площадь - {item.square} м
								<span className={styles.sq}>2</span>
							</p>
							<div className={styles.facility}>
								<p>Оснащение номера: </p>
								<div className={styles.images}>
									{item.facility.map((item) => (
										<Image
											src={item}
											width={16}
											height={16}
											alt='fas'
											key={item}
										/>
									))}
								</div>
							</div>
							<p>Цена за сутки: {item.cost}₽</p>
						</div>
						<Button text={`Забронировать`} />
					</div>
				</Link>
			))}
		</div>
	);
};

export default Catalog;
