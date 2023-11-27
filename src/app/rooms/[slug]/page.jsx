import Item from './Item/Item';

export default function Home({ params }) {
	return (
		<div>
			<Item params={params} />
		</div>
	);
}
