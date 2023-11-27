import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [
		{
			name: 'Эконом',
			slug: 'eco',
			size: '90x70x180cм',
			square: 0.63,
			facility: ['/facility/empty.svg'],
			cost: 100,
			img: '/cats/catEco.png',
		},
		{
			name: 'Эконом плюс',
			slug: 'eco_plus',
			size: '90x100x180cм',
			square: 0.9,
			facility: ['/facility/sunbed.svg', '/facility/post.svg'],
			cost: 200,
			img: '/cats/catEcoPlus.png',
		},
		{
			name: 'Комфорт',
			slug: 'comfort',
			size: '100x125x180cм',
			square: 1.13,
			facility: [
				'/facility/sunbed.svg',
				'/facility/post.svg',
				'/facility/complex.svg',
			],
			cost: 250,
			img: '/cats/catComf.png',
		},
		{
			name: 'Сьют',
			slug: 'sut',
			size: '125x125x180cм',
			square: 1.56,
			facility: [
				'/facility/sunbed.svg',
				'/facility/post.svg',
				'/facility/complex.svg',
			],
			cost: 350,
			img: '/cats/catSut.png',
		},
		{
			name: 'Люкс',
			slug: 'lux',
			size: '160x160x180cм',
			square: 2.56,
			facility: [
				'/facility/sunbed.svg',
				'/facility/post.svg',
				'/facility/complex.svg',
				'/facility/house.svg',
			],
			cost: 500,
			img: '/cats/catLux.png',
		},
		{
			name: 'Супер-люкс',
			slug: 'super_lux',
			size: '180x160x180cм',
			square: 2.88,
			facility: [
				'/facility/sunbed.svg',
				'/facility/post.svg',
				'/facility/complex.svg',
				'/facility/house.svg',
			],
			cost: 600,
			img: '/cats/catSuperLux.png',
		},
	],
	selectOne: null,
};

export const roomSlice = createSlice({
	name: 'room',
	initialState,
	reducers: {
		findOne: (state, action) => {
			console.log(action.payload);
			const { slug } = action.payload;
			state.selectOne = state.data.find((item) => item.slug === slug);
		},
	},
});

export const { findOne } = roomSlice.actions;

export const room = roomSlice.reducer;
