import SEOContent from './SEOContent';
import stylish from '../../styles/SEO-Section/SEOContentSection.module.css';

function SEOContentSection(props) {
	return (
		<div className={stylish.main_div}>
			<SEOContent
				id={props.seoSubHeader.at(0).id}
				seoSubHeader={props.seoSubHeader}
				seoMenuLi={props.seoSellsMenuLi}
			/>
			<SEOContent
				id={props.seoSubHeader.at(1).id}
				seoSubHeader={props.seoSubHeader}
				seoMenuLi={props.kazLocation.filter((city) => city.title)}
			/>
			<SEOContent
				id={props.seoSubHeader.at(2).id}
				seoSubHeader={props.seoSubHeader}
				seoMenuLi={props.seoRentMenuLi}
			/>
		</div>
	);
}

export default SEOContentSection;
