import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{
			name: 'Эконом',
			size: '90x70x180cм',
			square: '0.63 м2',
			facility: [
				{
					name: 'empty',
					img: '/facility/empty.svg',
				},
			],
			cost: '100₽',
			img: '/catEco.png',
		},
		{
			name: 'Эконом плюс',
			size: '90x100x180cм',
			square: '0.9 м2',
			facility: ['facility/sunbed.svg', 'facility/post.svg'],
			cost: '200₽',
			img: '/cats/catEcoPlus.png',
		},
		{
			name: 'Комфорт',
			size: '100x125x180cм',
			square: '1.13 м2',
			facility: [
				'facility/sunbed.svg',
				'facility/post.svg',
				'facility/complex.svg',
			],
			cost: '250₽',
			img: '/cats/catComf.png',
		},
		{
			name: 'Сьют',
			size: '125x125x180cм',
			square: '1.56 м2',
			facility: [
				'facility/sunbed.svg',
				'facility/post.svg',
				'facility/complex.svg',
			],
			cost: '350₽',
			img: '/cats/catSut.png',
		},
		{
			name: 'Люкс',
			size: '160x160x180cм',
			square: '2.56 м2',
			facility: [
				'facility/sunbed.svg',
				'facility/post.svg',
				'facility/complex.svg',
				'facility/house.svg',
			],
			cost: '500₽',
			img: '/cats/catLux.png',
		},
		{
			name: 'Супер-люкс',
			size: '180x160x180cм',
			square: '2.88 м2',
			facility: [
				'facility/sunbed.svg',
				'facility/post.svg',
				'facility/complex.png',
				'facility/house.svg',
			],
			cost: '600₽',
			img: '/cats/catSuperLux.png',
		},
	],
};

export const roomSlice = createSlice({
	name: 'room',
	initialState,
	reducers: {},
});

// export const {} = roomSlice.actions;

export const room = roomSlice.reducer;
