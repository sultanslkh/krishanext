import stylish from './ContentWrapper.module.css';

function ContentWrapper(props) {
	return <div className={stylish.main_content_wrapper}>{props.children}</div>;
}

export default ContentWrapper;
