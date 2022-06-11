import { getStaticProps } from '../../pages';
import SEOHeader from './SEOHeader';
import SEOParagraph from './SEOParagraph';

function SEOContainer(props) {
	return (
		<section style={{ marginTop: '8px' }}>
			<SEOHeader />
			<SEOParagraph seoParagraph={props.seoParagraph} />
		</section>
	);
}

export default SEOContainer;
