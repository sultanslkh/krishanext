import HeadFooterWrapper from '../../UI/HeadFooterWrapper';
import SearchForm from '../../components/SearchForm';
import CategoryNavbar from '../../components/CategoryNavbar';
// /sells

function SellsMainPage({
	navs,
	headTitle,
	realStateTypeList,
	kazLocation,
	roomNumber,
	hotTitles,
}) {
	return (
		<div>
			<HeadFooterWrapper headTitle={headTitle.at(1)} navs={navs}>
				<CategoryNavbar hotTitles={hotTitles} />
				<SearchForm
					location={kazLocation}
					realstatetype={realStateTypeList}
					rooms={roomNumber}
				/>
			</HeadFooterWrapper>
		</div>
	);
}
export default SellsMainPage;

//JSON files:
export async function getStaticProps() {
	//Nav-title:
	const response1 = await fetch('http://localhost:3000/api/get-nav-lists');
	const navs = await response1.json();

	//Head-titles:
	const response2 = await fetch('http://localhost:3000/api/get-head-title');
	const headTitle = await response2.json();

	//RealState Type:
	const response3 = await fetch(
		'http://localhost:3000/api/get-state-type-list'
	);
	const realStateTypeList = await response3.json();

	//Location:
	const response4 = await fetch('http://localhost:3000/api/get-location');
	const kazLocation = await response4.json();

	//Room number:
	const response5 = await fetch('http://localhost:3000/api/get-room-number');
	const roomNumber = await response5.json();

	//Hot-titles:
	const response6 = await fetch('http://localhost:3000/api/get-hot-titles');
	const hotTitles = await response6.json();

	return {
		props: {
			realStateTypeList,
			kazLocation,
			roomNumber,
			navs,
			headTitle,
			hotTitles,
		},
	};
}
