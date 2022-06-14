import HeadFooterWrapper from '../../UI/HeadFooterWrapper';

function NewAd({ navs, headTitle }) {
	return (
		<div>
			<HeadFooterWrapper navs={navs} headTitle={headTitle.at(3)}>
				<h1>Подать объявление</h1>
			</HeadFooterWrapper>
		</div>
	);
}

export default NewAd;

//JSON files:
export async function getStaticProps() {
	//Nav-title:
	const response1 = await fetch('http://localhost:3000/api/get-nav-lists');
	const navs = await response1.json();

	//Head-titles:
	const response2 = await fetch('http://localhost:3000/api/get-head-title');
	const headTitle = await response2.json();

	return {
		props: {
			navs,
			headTitle,
		},
	};
}
