import Link from 'next/link';
import stylish from '../../styles/SEO-Section/SEOContent.module.css';
function SEOContent(props) {
	return (
		<div className={stylish.main_content_div}>
			<div className={stylish.subsection_header}>
				{props.seoSubHeader.map(
					(header) => props.id === header.id && header.title
				)}
			</div>
			<div className={stylish.seo_main_menu_list}>
				{props.seoMenuLi.map((list) => (
					<Link href="/">
						<a className={stylish.seo_list_a}>{list.title}</a>
					</Link>
				))}
			</div>
		</div>
	);
}

export default SEOContent;
