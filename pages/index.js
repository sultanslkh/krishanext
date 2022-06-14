import HotHeader from '../components/Hot-Offers/HotHeader';
import HotOffersMain from '../components/Hot-Offers/HotOffersMain';
import SearchForm from '../components/SearchForm';
import PreContentRow from '../components/Content-Preview/PreContentRow';
import SEOContainer from '../components/SEO-Section/SEOContainer';
import 'bootstrap/dist/css/bootstrap.css';
import HeadFooterWrapper from '../UI/HeadFooterWrapper';

export default function Home({
	realStateTypeList,
	kazLocation,
	roomNumber,
	navs,
	hotTitles,
	hotImgsSell,
	hotImgsRent,
	hotTitlesRent,
	contentNewsList,
	contentNewsImg,
	contentBlockHeaders,
	contentArticleList,
	contentPRList,
	seoParagraph,
	seoSubHeader,
	seoSellsMenuLi,
	seoRentMenuLi,
	newBuildingsList,
	headTitle,
}) {
	return (
		<div>
			<HeadFooterWrapper headTitle={headTitle.at(0)} navs={navs}>
				<SearchForm
					location={kazLocation}
					realstatetype={realStateTypeList}
					rooms={roomNumber}
				/>
				<HotHeader />
				<HotOffersMain
					hotTitles={hotTitles}
					hotSellImgs={hotImgsSell}
					hotImgsRent={hotImgsRent}
					hotTitlesRent={hotTitlesRent}
					hotLocations={kazLocation}
				/>
				<PreContentRow
					contentNewsList={contentNewsList}
					contentNewsImg={contentNewsImg}
					contentBlockHeaders={contentBlockHeaders}
					contentArticleList={contentArticleList}
					contentPRList={contentPRList}
				/>
				<SEOContainer
					seoParagraph={seoParagraph}
					seoSubHeader={seoSubHeader}
					seoSellsMenuLi={seoSellsMenuLi}
					seoRentMenuLi={seoRentMenuLi}
					kazLocation={kazLocation}
					newBuildingsList={newBuildingsList}
				/>
			</HeadFooterWrapper>
		</div>
	);
}

//JSON files:
export async function getServerSideProps() {
	//RealState Type:
	const response1 = await fetch(
		'http://localhost:3000/api/get-state-type-list'
	);
	const realStateTypeList = await response1.json();

	//Location:
	const response2 = await fetch('http://localhost:3000/api/get-location');
	const kazLocation = await response2.json();

	//Room number:
	const response3 = await fetch('http://localhost:3000/api/get-room-number');
	const roomNumber = await response3.json();

	//Category:
	const response4 = await fetch('http://localhost:3000/api/get-category');
	const category = await response4.json();

	//Nav-title:
	const response5 = await fetch('http://localhost:3000/api/get-nav-lists');
	const navs = await response5.json();

	//Hot-titles:
	const response6 = await fetch('http://localhost:3000/api/get-hot-titles');
	const hotTitles = await response6.json();

	//Hot-imgs:
	const response7 = await fetch('http://localhost:3000/api/get-sell-imgs-row');
	const hotImgsSell = await response7.json();

	//Hot-rent-imgs:
	const response8 = await fetch('http://localhost:3000/api/get-rent-imgs-row');
	const hotImgsRent = await response8.json();

	//Hot-titles-rent:
	const response9 = await fetch(
		'http://localhost:3000/api/get-hot-titles-rent'
	);
	const hotTitlesRent = await response9.json();

	//Content-news-list:
	const response10 = await fetch(
		'http://localhost:3000/api/get-content-news-list'
	);
	const contentNewsList = await response10.json();

	//Hot-titles-rent:
	const response11 = await fetch(
		'http://localhost:3000/api/get-content-news-img'
	);
	const contentNewsImg = await response11.json();

	//Hot-headers-content:
	const response12 = await fetch(
		'http://localhost:3000/api/get-content-block-headers'
	);
	const contentBlockHeaders = await response12.json();

	//Content-article-list:
	const response13 = await fetch(
		'http://localhost:3000/api/get-content-article-list'
	);
	const contentArticleList = await response13.json();

	//Content-pr-list:
	const response14 = await fetch(
		'http://localhost:3000/api/get-content-pr-list'
	);
	const contentPRList = await response14.json();

	//SEO-paragraph:
	const response15 = await fetch('http://localhost:3000/api/get-seo-paragraph');
	const seoParagraph = await response15.json();

	//SEO-sub-headers:
	const response16 = await fetch(
		'http://localhost:3000/api/get-seocontent-sub-headers'
	);

	const seoSubHeader = await response16.json();

	//SEO-sells-menu:
	const response17 = await fetch(
		'http://localhost:3000/api/get-seocontent-sells-menu-list'
	);
	const seoSellsMenuLi = await response17.json();

	//SEO-rent-menu:
	const response18 = await fetch(
		'http://localhost:3000/api/get-seocontent-rent-menu-list'
	);
	const seoRentMenuLi = await response18.json();

	//New-buildings-list:
	const response19 = await fetch(
		'http://localhost:3000/api/get-newbuildings-list'
	);
	const newBuildingsList = await response19.json();

	//Head-titles:
	const response20 = await fetch('http://localhost:3000/api/get-head-title');
	const headTitle = await response20.json();

	return {
		props: {
			realStateTypeList,
			kazLocation,
			roomNumber,
			category,
			navs,
			hotTitles,
			hotImgsSell,
			hotImgsRent,
			hotTitlesRent,
			contentNewsList,
			contentNewsImg,
			contentBlockHeaders,
			contentArticleList,
			contentPRList,
			seoParagraph,
			seoSubHeader,
			seoSellsMenuLi,
			seoRentMenuLi,
			newBuildingsList,
			headTitle,
		},
	};
}
