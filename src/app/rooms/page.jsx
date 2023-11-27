'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import Aside from '@/components/rooms/aside/Aside';
import Banner from '@/components/rooms/banner/Banner';

import Catalog from '../../components/rooms/catalog/catalog';

import styles from './rooms.module.scss';
import useMediaQuery from '@/hook/useMediaQuery';

const page = () => {
	const rooms = Array.from(useSelector((state) => state.room.data));
	const isMedium = useMediaQuery('(min-width: 1024px)');
	// const up = <Image src='/up.svg' width={7} height={12} alt='up' />;
	// const down = <Image src='/down.svg' width={7} height={12} alt='down' />;

	return (
		<>
			{isMedium ? (
				<div className={styles.rooms}>
					<section className={styles.head}>
						<h1>Наши номера</h1>
						<form action='sort'>
							<select name='' id=''>
								<option value=''>По площади</option>
								<option value=''>По площади</option>
								<option value=''>дороже</option>
								<option value=''>дешевле</option>
							</select>
						</form>
					</section>
					<section className={styles.catolog}>
						<Aside rooms={rooms} />
						<Catalog rooms={rooms} />
					</section>
					<Banner />
				</div>
			) : (
				<div className={styles.rooms}>
					<section className={styles.head}>
						<h1>Наши номера</h1>
						<div className={styles.filter}>
							<p>Фильтры</p>
						</div>
						<div className={styles.filter_box}>
							<Aside rooms={rooms} />
						</div>
						<form action='sort'>
							<select name='' id=''>
								<option value=''>По площади</option>
								<option value=''>По площади</option>
								<option value=''>дороже</option>
								<option value=''>дешевле</option>
							</select>
						</form>
					</section>
					<Catalog rooms={rooms} />
					<Banner />
				</div>
			)}
		</>
	);
};

export default page;
