import Link from 'next/link';
import { getStaticProps } from '../../pages';
import stylish from '../../styles/Header.module.css';

function Header({ navs }) {
	return (
		<div className={stylish.header}>
			<h1 id="logo">КРЫША</h1>
			<ul>
				{navs.map((nav) => (
					<li key={nav.id}>
						<Link href="">{<a>{nav.title}</a>}</Link>
					</li>
				))}
			</ul>
			<button>Подать объявление</button>
		</div>
	);
}

export default Header;

//<a.>{nav.title}</a.
