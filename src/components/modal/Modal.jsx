'use client';

import { motion } from 'framer-motion';
import React from 'react';

import styles from './modal.module.scss';

const Modal = ({ children, setFiltOpen }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.modal}
			onClick={(e) => {
				e.stopPropagation();
				setFiltOpen(false);
			}}
		>
			<div className={styles.modal_box} onClick={(e) => e.stopPropagation()}>
				<div
					className={styles.break}
					onClick={() => {
						setFiltOpen(false);
					}}
				>
					<span className={styles.span1} />
					<span className={styles.span2} />
				</div>
				<div className={styles.modal_main}>{children}</div>
			</div>
		</motion.div>
	);
};

export default Modal;
