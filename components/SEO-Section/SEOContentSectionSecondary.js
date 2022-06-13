import SEOContent from './SEOContent';
import stylish from '../../styles/SEO-Section/SEOContentSection.module.css';
function SEOContentSectionSecondary(props) {
	return (
		<div className={stylish.main_div}>
			<SEOContent
				id={props.seoSubHeader.at(3).id}
				seoSubHeader={props.seoSubHeader}
				seoMenuLi={props.newBuildingsList}
			/>
			<SEOContent
				id={props.seoSubHeader.at(4).id}
				seoSubHeader={props.seoSubHeader}
				seoMenuLi={props.kazLocation.filter((city) => city.title)}
			/>
			<div style={{ marginRight: '3%', width: '100%' }}></div>
		</div>
	);
}

export default SEOContentSectionSecondary;
