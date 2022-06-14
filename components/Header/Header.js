import Link from 'next/link';
import stylish from '../../styles/Header.module.css';

function Header({ navs }) {
	return (
		<div className={stylish.header}>
			<Link href="/">
				<a>
					<h1 className={stylish.header_h1} id="logo">
						КРЫША
					</h1>
				</a>
			</Link>
			<ul>
				{navs.map((nav) => (
					<li key={nav.id}>
						<Link href={`/${nav.url}`}>{<a>{nav.title}</a>}</Link>
					</li>
				))}
			</ul>
			<Link href="/new">
				<button className={stylish.header_button}>Подать объявление</button>
			</Link>
		</div>
	);
}

export default Header;

//<a.>{nav.title}</a.
