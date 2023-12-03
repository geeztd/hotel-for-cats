import React from 'react';

import styles from './aside.module.scss';
import fas from './fas.json';

const Aside = ({ rooms, data, setData, setFiltOpen }) => {
	const Submit = (e) => {
		e.preventDefault();
		const formData = new FormData(document.getElementById('formFilter'));
		const priceFrom = formData.get('priceFrom') || 100;
		const priceTo = formData.get('priceTo') || 600;
		const empty = formData.get('fas0');
		const sunbed = formData.get('fas1');
		const post = formData.get('fas2');
		const complex = formData.get('fas3');
		const house = formData.get('fas4');

		const arraySquare = [
			...rooms.map((item) => formData.get(`${item.square}`)),
		];
		let arr = rooms.filter((item, i) => arraySquare[i] === 'on');

		arr = arr.filter((item) => {
			const facilityArray = [...item.facility];
			return (
				facilityArray.includes(empty) ||
				facilityArray.includes(sunbed) ||
				facilityArray.includes(post) ||
				facilityArray.includes(complex) ||
				facilityArray.includes(house)
			);
		});

		arr = arr.filter((item) => {
			if (item.cost >= priceFrom && item.cost <= priceTo) return true;
		});
		setData(arr);
	};

	return (
		<aside className={styles.aside}>
			<form action='filter' id='formFilter'>
				<h4>Цена за сутки, ₽</h4>
				<div className={styles.cost}>
					<input type='number' name='priceFrom' placeholder='от 100' />
					<input type='number' name='priceTo' placeholder='до 600' />
				</div>
				<h4>Площадь</h4>
				<div className={styles.sq_box}>
					{rooms.map((item, i) => (
						<label key={item.name}>
							{[...data].includes(item) ? (
								<input
									type='checkbox'
									defaultChecked
									name={item.square}
									id={`sq${item.square}`}
								/>
							) : (
								<input
									type='checkbox'
									name={item.square}
									id={`sq${item.square}`}
								/>
							)}
							{`${item.square} м²`}
						</label>
					))}
				</div>
				<h4>Оснащение</h4>
				<div className={styles.fas}>
					{fas.map((item) => (
						<label key={item.id}>
							<input
								type='checkbox'
								defaultChecked
								value={item.value}
								name={`fas${item.id}`}
							/>
							{item.name}
						</label>
					))}
				</div>
				<button
					className={styles.reset}
					type='reset'
					onClick={(e) => {
						setFiltOpen(false);
						setData(rooms);
					}}
				>
					<p>Сбросить фильтры</p>
				</button>
				<button
					className={styles.active}
					onClick={(e) => {
						Submit(e);
						setFiltOpen(false);
					}}
				>
					<p>Подобрать</p>
				</button>
			</form>
		</aside>
	);
};

export default Aside;
