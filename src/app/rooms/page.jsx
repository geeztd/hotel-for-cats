'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Aside from '@/components/rooms/aside/Aside';
import Banner from '@/components/rooms/banner/Banner';

import Catalog from '../../components/rooms/catalog/catalog';

import styles from './rooms.module.scss';
import useMediaQuery from '@/hook/useMediaQuery';

const page = () => {
	const rooms = Array.from(useSelector((state) => state.room.data));
	const isMedium = useMediaQuery('(min-width: 1024px)');
	const [data, setData] = useState(rooms);
	const [selectSort, setSelectSort] = useState(1);
	useEffect(() => {
		console.log(data);
		console.log(data.sort(Sort));
	}, [data]);

	const Sort = (a, b) => {
		switch (selectSort) {
			case 0:
				return a.square > b.square;
			case 1:
				return a.square < b.square;
			case 2:
				return a.cost > b.cost;
			case 3:
				return a.cost < b.cost;
		}
	};

	return (
		<>
			{isMedium ? (
				<div className={styles.rooms}>
					<section className={styles.head}>
						<h1>Наши номера</h1>
						<form action='sort'>
							<select
								name=''
								id=''
								onChange={(e) => {
									setSelectSort(e.target.value);
									setData([...data].sort(Sort));
								}}
							>
								<option value={0}>↑ По площади</option>
								<option value={1}>↓ По площади</option>
								<option value={2}>↑ По цене</option>
								<option value={3}>↓ По цене</option>
							</select>
						</form>
					</section>
					<section className={styles.catolog}>
						<Aside rooms={data} />
						<Catalog rooms={data} />
					</section>
					<Banner />
				</div>
			) : (
				<div className={styles.rooms}>
					<section className={styles.head}>
						<h1>Наши номера</h1>
						<div className={styles.filter}>
							<Image
								src='/filter.svg'
								width={12}
								height={15}
								alt='filter'
							/>
							<p>Фильтры</p>
						</div>
						<div className={styles.filter_box}>
							<Aside rooms={data} />
						</div>
						<form action='sort'>
							<select name='' id=''>
								<option value={0}>↑ По площади</option>
								<option value={1}>↓ По площади</option>
								<option value={2}>↑ По цене</option>
								<option value={3}>↓ По цене</option>
							</select>
						</form>
					</section>
					<Catalog rooms={data} />
					<Banner />
				</div>
			)}
		</>
	);
};

export default page;
