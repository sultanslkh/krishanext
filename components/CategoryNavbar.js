import stylish from '../styles/CategoryNavbar.module.css';
import Link from 'next/link';

function CategoryNavbar(props) {
	return (
		<div className={stylish.titles_cat}>
			<nav className={stylish.submenu}>
				<ul className={stylish.list_titles_cat}>
					{props.hotTitles.map((title) => (
						<li>
							<Link href="/">
								<a>{title.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

export default CategoryNavbar;
