import React from 'react';

import styles from './modal.module.scss';

const Modal = ({ children, setFiltOpen }) => {
	return (
		<div
			className={styles.modal}
			onClick={() => {
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
		</div>
	);
};

export default Modal;
