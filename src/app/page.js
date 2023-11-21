import Aboute from '@/components/home/aboute/Aboute';
import Carusel from '@/components/home/carusel/Carusel';
import Hero from '@/components/home/hero/Hero';

export default function Home() {
	return (
		<div>
			<Hero />
			<Aboute />
			<h1 className='lg:text-7xl md:text-6xl text-4xl text-center my-4'>
				Номера
			</h1>
			<Carusel slidesView={1} isReviews={false} id='num' />
			<h1 className='lg:text-7xl md:text-6xl text-4xl text-center my-4'>
				Отзывы
			</h1>
			<Carusel slidesView={2.5} isReviews={true} id='com' />
		</div>
	);
}
