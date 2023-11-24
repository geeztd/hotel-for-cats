'use client';

import React from 'react';
import { useSelector } from 'react-redux';

import Aside from '@/components/catalog/aside/Aside';

import Catalog from '../../components/catalog/catalog';

import styles from './rooms.module.scss';

const page = () => {
	const rooms = Array.from(useSelector((state) => state.room.data));
	return (
		<div className={styles.rooms}>
			<div>
				<h1>Наши номера</h1>
				<form action='sort'>
					<select name='' id=''>
						<option value=''></option>
						<option value=''></option>
						<option value=''></option>
						<option value=''></option>
					</select>
				</form>
			</div>
			<div className={styles.catolog}>
				<Aside rooms={rooms} />
				<Catalog rooms={rooms} />
			</div>
		</div>
	);
};

export default page;
