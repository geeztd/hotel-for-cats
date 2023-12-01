'use client';

import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/button/Button';
import Carusel from '@/components/home/carusel/Carusel';

import styles from './item.module.scss';
import { findOne } from '@/app/redux/slice/RoomSlice';
import getName from '@/functions/getName';

const Item = ({ params }) => {
	const item = useSelector((state) => state.room.selectOne);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(findOne(params));
	}, []);

	if (!item) {
		return <div>ERROR</div>;
	}

	return (
		<section className={styles.sec}>
			<Image
				src='/banner/footprint.svg'
				alt=''
				width={299}
				height={346}
				className={styles.print}
			/>
			<div className={styles.cart}>
				<Image
					src={item.img}
					width={10000}
					height={7000}
					alt='cat'
					className={styles.img}
				/>
				<div className={styles.info}>
					<h2 className={styles.name}>{item.name}</h2>
					<p>Размеры (ШxГxВ) - {item.size}</p>
					<p>Площадь - {item.square}м²</p>
					<p>Оснащение : </p>
					<div className={styles.fas_box}>
						{item.facility.map((item) => (
							<div className={styles.fas_item} key={item}>
								<Image src={item} width={16} height={16} alt='fas' />
								<p>{getName(item)}</p>
							</div>
						))}
					</div>
					<p className={styles.cost}>Цена за сутки - {item.cost}₽</p>
					<div className={styles.button}>
						<Button text={`Забронировать`} />
					</div>
				</div>
			</div>
			<h1 className={styles.another}>Другие номера</h1>
			<Carusel isReviews={false} slidesView={1} id={`te3`} />
		</section>
	);
};

export default Item;
