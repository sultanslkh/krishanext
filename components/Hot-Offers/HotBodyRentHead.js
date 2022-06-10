import Link from 'next/link';
import stylish from '../../styles/Hot-Offers/HotBodyRentHead.module.css';

function HotBodyRentHead(props) {
	return (
		<div className={stylish.titles_hot}>
			<ul className={stylish.list_titles_hot}>
				<strong>Аренда</strong>
				{props.hotTitlesRent.map((title) => (
					<li>
						<Link href="/">
							<a>{title.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
export default HotBodyRentHead;
