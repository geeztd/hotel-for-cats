import React from 'react';

import styles from './modal.module.scss';

const Modal = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modal_box}>
				<div className={styles.modal_main}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
