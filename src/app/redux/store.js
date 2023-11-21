import { configureStore } from '@reduxjs/toolkit';

import { room } from './slice/RoomSlice';

export const store = configureStore({
	reducer: {
		room: room,
	},
});
