'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from './Slide';
import SlideReviews from './SlideReviews';
import dataReviews from './dataReviews.json';
import styles from './slide.module.scss';
import getRand from '@/functions/getRand';

const Carusel = ({ slidesView, isReviews, id }) => {
	const rooms = Array.from(useSelector((state) => state.room.data));
	const selectItem = useSelector((state) => state.room.selectOne);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(getRand(rooms, selectItem));
	}, [selectItem]);

	let numberSwiper, laptopSwap;
	isReviews
		? (numberSwiper = laptopSwap = 2)
		: (numberSwiper = laptopSwap = 1);

	return (
		<div className={styles.wrapper} id={id}>
			<Swiper
				style={{ '--swiper-pagination-color': '#FF7236' }}
				modules={[Navigation, Pagination]}
				spaceBetween={30}
				navigation={{
					nextEl: `#next-slide${numberSwiper}`,
					prevEl: `#prev-slide${numberSwiper}`,
				}}
				pagination={{ clickable: true }}
				breakpoints={{
					320: { slidesPerView: 1 },
					768: { slidesPerView: laptopSwap },
					1024: { slidesPerView: slidesView },
				}}
			>
				{isReviews
					? dataReviews.map((item) => (
							<SwiperSlide key={item.author}>
								<SlideReviews
									author={item.author}
									date={item.date}
									text={item.text}
								/>
							</SwiperSlide>
					  ))
					: data.map((item) => (
							<SwiperSlide key={item.name}>
								<Slide
									slug={item.slug}
									img={item.img}
									name={item.name}
									space={item.square}
									size={item.size}
									cost={item.cost}
								/>
							</SwiperSlide>
					  ))}
			</Swiper>
			<div className={styles.navigation}>
				<button id={'prev-slide' + numberSwiper}>
					<Image src='/home/prev.svg' width={60} height={60} alt='<' />
				</button>
				<button id={'next-slide' + numberSwiper}>
					<Image src='/home/next.svg' width={60} height={60} alt='>' />
				</button>
			</div>
			{isReviews ? (
				<></>
			) : (
				<Image
					src='/home/fish.svg'
					width={484}
					height={151}
					alt='fish'
					className={styles.fish}
				/>
			)}
		</div>
	);
};

export default Carusel;
