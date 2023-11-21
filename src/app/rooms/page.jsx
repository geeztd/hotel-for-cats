'use client';

import React from 'react';
import { useSelector } from 'react-redux';

const page = () => {
	const rooms = Array.from(useSelector((state) => state.room.data));

	console.log(rooms.reverse());
	return (
		<div>
			<aside></aside>
			<div></div>
		</div>
	);
};

export default page;
