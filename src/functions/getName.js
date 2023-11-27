'use client';

const getName = (src) => {
	switch (src) {
		case '/facility/sunbed.svg':
			return 'Лежак';
		case '/facility/post.svg':
			return 'Когтеточка';
		case '/facility/complex.svg':
			return 'игровой комплекс';
		case '/facility/house.svg':
			return 'Домик';
		case '/facility/empty.svg':
			return 'Пустой';
		default:
			return;
	}
};

export default getName;
