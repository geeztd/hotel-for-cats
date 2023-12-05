'use client';

import Image from 'next/image';
import React from 'react';

import Button from '../button/Button';

import styles from './popUp.module.scss';

const BokingForm = ({ setOpen, setSucOpen }) => {
	return (
		<div className={styles.boking_form}>
			<h1 className={styles.h1}>Забронировать номер</h1>
			<Image
				src='/home/aboute/footprint.svg'
				width={137}
				height={117}
				alt='print'
				className={styles.img}
			/>
			<form action='boking' className={styles.form}>
				<label>
					<input type='text' placeholder='Ваше имя' name='user' />
				</label>
				<label>
					<input type='text' placeholder='Имя питомца' name='pet' />
				</label>
				<label>
					<input type='tel' placeholder='Телефон' name='tel' />
				</label>
				<label>
					<input type='email' placeholder='E-mail' name='mail' />
				</label>

				<div className={styles.date}>
					<p>Дата заезда с</p>
					<label>
						<input type='date' name='dateFrom' />
					</label>
					<p>по</p>
					<label>
						<input type='date' name='dateTo' />
					</label>
				</div>
				<div
					onClick={(e) => {
						setOpen(false);
						setSucOpen(true);
					}}
				>
					<Button text={`Отправить заявку`} type={2} />
				</div>
			</form>
		</div>
	);
};

export default BokingForm;
