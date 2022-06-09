import Link from 'next/link';
import stylish from '../../styles/Hot-Offers/HotHeader.module.css';

function HotHeader() {
	return (
		<div className={stylish.main_container}>
			<h1>Горячие предложения недвижимости в Казахстане</h1>
			<Link href="/">
				<a>Как сюда попасть?</a>
			</Link>
		</div>
	);
}

export default HotHeader;
