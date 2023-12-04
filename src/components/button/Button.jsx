'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Modal from '../modal/Modal';
import BokingForm from '../popUp/BokingForm';
import Sucsess from '../popUp/Sucsess';

import styles from './button.module.scss';

const Button = ({ text, type }) => {
	const [isOpenBoking, setBokingOpen] = useState(false);
	const [isSucsessOpen, setSucsessOpen] = useState(false);
	return (
		<div
			className={styles.button}
			onClick={(e) => {
				if (type === 1) setBokingOpen(true);
			}}
		>
			<h3 className={styles.h}>{text}</h3>
			<Image
				className={styles.img}
				src='/home/button.svg'
				width={36}
				height={36}
				alt='step'
			/>
			{isOpenBoking ? (
				<Modal setFiltOpen={setBokingOpen}>
					<BokingForm
						setOpen={setBokingOpen}
						setSucOpen={setSucsessOpen}
					/>
				</Modal>
			) : null}
			{isSucsessOpen ? (
				<Modal setFiltOpen={setSucsessOpen}>
					<Sucsess setOpen={setSucsessOpen} />
				</Modal>
			) : null}
		</div>
	);
};

export default Button;
