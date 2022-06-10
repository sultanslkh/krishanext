import ContentWrapper from '../../UI/ContentWrapper';
import ContentBlock from './ContentBlock';

function PreContentRow(props) {
	return (
		<ContentWrapper>
			<ContentBlock
				contentNewsList={props.contentNewsList}
				contentNewsImg={props.contentNewsImg}
			/>
		</ContentWrapper>
	);
}

export default PreContentRow;
