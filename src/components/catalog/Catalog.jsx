import Image from 'next/image';
import React from 'react';

import Button from '@/components/button/Button';

import styles from './catalog.module.scss';

const Catalog = ({ rooms }) => {
	return (
		<div className={styles.catalog}>
			{rooms.map((item) => (
				<div className={styles.item} key={item.name}>
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
							Площадь - {item.square}
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
			))}
		</div>
	);
};

export default Catalog;
