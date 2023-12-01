import React from 'react';

import styles from './aside.module.scss';

const Aside = ({ rooms }) => {
	return (
		<aside className={styles.aside}>
			<form action='filter'>
				<h4>Цена за сутки, ₽</h4>
				<div className={styles.cost}>
					<input type='number' placeholder='от 100' />
					<input type='number' placeholder='до 600' />
				</div>
				<h4>Площадь</h4>
				<div className={styles.sq_box}>
					{rooms.map((item) => (
						<label key={item.name}>
							<input
								type='checkbox'
								defaultChecked
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
						<input type='checkbox' defaultChecked id='fas' /> Пустой номер
					</label>
					<label>
						<input type='checkbox' defaultChecked id='fas' /> Лежак
					</label>
					<label>
						<input type='checkbox' defaultChecked id='fas' /> Когтеточка
					</label>
					<label>
						<input type='checkbox' defaultChecked id='fas' /> Игровой
						комплекс
					</label>
					<label>
						<input type='checkbox' defaultChecked id='fas' /> Домик
					</label>
				</div>
				<button className={styles.reset} type='reset'>
					<p>Сбросить фильтры</p>
				</button>
				<button className={styles.active} type='button'>
					<p>Подобрать</p>
				</button>
			</form>
		</aside>
	);
};

export default Aside;
