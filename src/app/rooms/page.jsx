'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@/components/modal/Modal';
import Aside from '@/components/rooms/aside/Aside';
import Banner from '@/components/rooms/banner/Banner';

import Catalog from '../../components/rooms/catalog/catalog';

import styles from './rooms.module.scss';
import useMediaQuery from '@/hook/useMediaQuery';

const page = () => {
	const rooms = Array.from(useSelector((state) => state.room.data));
	const isMedium = useMediaQuery('(min-width: 1024px)');
	const [data, setData] = useState(rooms);
	const [sel, setSel] = useState(0);
	const [isFiltOpen, setFiltOpen] = useState(false);

	return (
		<>
			{isMedium ? (
				<div className={styles.rooms}>
					<section className={styles.head}>
						<h1>Наши номера</h1>
						<form action='sort'>
							<select
								onChange={(e) => {
									setSel(e.target.value);
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
						<Aside
							rooms={rooms}
							setData={setData}
							setFiltOpen={setFiltOpen}
							data={data}
						/>
						<Catalog rooms={sel % 2 === 0 ? data : data.reverse()} />
					</section>
					<Banner />
				</div>
			) : (
				<div className={styles.rooms}>
					<div className={styles.filter_box}>
						{isFiltOpen ? (
							<Modal setFiltOpen={setFiltOpen}>
								<Aside
									data={data}
									rooms={rooms}
									setData={setData}
									setFiltOpen={setFiltOpen}
								/>
							</Modal>
						) : null}
					</div>
					<section className={styles.head}>
						<h1>Наши номера</h1>
						<div
							className={styles.filter}
							onClick={() => {
								setFiltOpen(true);
							}}
						>
							<Image
								src='/filter.svg'
								width={12}
								height={15}
								alt='filter'
							/>
							<p>Фильтры</p>
						</div>

						<form action='sort'>
							<select
								onChange={(e) => {
									setSel(e.target.value);
								}}
							>
								<option value={0}>↑ По площади</option>
								<option value={1}>↓ По площади</option>
								<option value={2}>↑ По цене</option>
								<option value={3}>↓ По цене</option>
							</select>
						</form>
					</section>
					<Catalog rooms={sel % 2 === 0 ? data : data.reverse()} />
					<Banner />
				</div>
			)}
		</>
	);
};

export default page;
