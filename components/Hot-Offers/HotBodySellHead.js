import stylish from '../../styles/Hot-Offers/HotBodySellHead.module.css';
import Link from 'next/link';

function HotBodySellHead(props) {
	return (
		<div className={stylish.titles_hot}>
			<ul className={stylish.list_titles_hot}>
				<strong>Продажа</strong>
				{props.hotTitles.map((title) => (
					<li>
						<Link href="/">
							<a>{title.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<div className={stylish.advertisement_title}>
				<Link href="/">
					<a>Недвижимость в Турции</a>
				</Link>
			</div>
		</div>
	);
}

export default HotBodySellHead;
