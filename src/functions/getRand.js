'use client';
const getRand = (arr, selectOne) => {
	let result = Array(3);
	let n = 0;

	while (n < 3) {
		let x = Math.floor(Math.random() * arr.length);
		if (!result.includes(arr[x]) && arr[x] != selectOne) {
			result[n] = arr[x];
			n++;
		}
	}
	return result;
};

export default getRand;
