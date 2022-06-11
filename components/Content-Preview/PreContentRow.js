import ContentWrapper from '../../UI/ContentWrapper';
import ContentBlock from './ContentBlock';

function PreContentRow(props) {
	return (
		<ContentWrapper>
			<ContentBlock
				id={props.contentBlockHeaders.at(0).id}
				contentBlockHeaders={props.contentBlockHeaders}
				contentImg={props.contentNewsImg}
				contentList={props.contentNewsList}
			/>
			<ContentBlock
				id={props.contentBlockHeaders.at(1).id}
				contentBlockHeaders={props.contentBlockHeaders}
				contentImg={props.contentNewsImg}
				contentList={props.contentArticleList}
			/>
			<ContentBlock
				id={props.contentBlockHeaders.at(2).id}
				contentBlockHeaders={props.contentBlockHeaders}
				contentImg={props.contentNewsImg}
				contentList={props.contentPRList}
			/>
		</ContentWrapper>
	);
}

export default PreContentRow;
