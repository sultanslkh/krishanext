import SEOHeader from './SEOHeader';
import SEOParagraph from './SEOParagraph';
import SEOContentSection from './SEOContentSection';
import SEOContentSectionSecondary from './SEOContentSectionSecondary';

function SEOContainer(props) {
	return (
		<section style={{ marginTop: '8px' }}>
			<SEOHeader />
			<SEOParagraph seoParagraph={props.seoParagraph} />
			<SEOContentSection
				seoSubHeader={props.seoSubHeader}
				seoSellsMenuLi={props.seoSellsMenuLi}
				kazLocation={props.kazLocation}
				seoRentMenuLi={props.seoRentMenuLi}
			/>
			<SEOContentSectionSecondary
				seoSubHeader={props.seoSubHeader}
				newBuildingsList={props.newBuildingsList}
				kazLocation={props.kazLocation}
			/>
		</section>
	);
}

export default SEOContainer;
