import React from 'react';

import styles from './aside.module.scss';

const Aside = ({ rooms }) => {
	return (
		<aside className={styles.aside}>
			<form action='filter'>
				<h4>Цена за сутки, ₽</h4>
				<div className={styles.cost}>
					<input type='text' placeholder='от 100' />
					<input type='text' placeholder='до 600' />
				</div>
				<h4>Площадь</h4>
				<div className={styles.sq_box}>
					{rooms.map((item) => (
						<label key={item.name}>
							<input
								type='checkbox'
								onChange={(e) => {
									console.log(`click ${item.square},`);
								}}
								name={item.square}
								id='sq'
							/>{' '}
							{item.square} м<span className={styles.sq}>2</span>
						</label>
					))}
				</div>
				<h4>Оснащение</h4>
				<div className={styles.fas}>
					<label>
						<input type='checkbox' name='' id='fas' /> Пустой номер
					</label>
					<label>
						<input type='checkbox' name='' id='fas' /> Лежак
					</label>
					<label>
						<input type='checkbox' name='' id='fas' /> Когтеточка
					</label>
					<label>
						<input type='checkbox' name='' id='fas' /> Игровой комплекс
					</label>
					<label>
						<input type='checkbox' name='' id='fas' /> Домик
					</label>
				</div>
				<p className={styles.reset}>Сбросить фильтры</p>
				<p className={styles.active}>Подобрать</p>
			</form>
		</aside>
	);
};

export default Aside;
