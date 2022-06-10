import HotBodySell from './HotBodySell';
import HotBodyRent from './HotBodyRent';

import stylish from '../../styles/Hot-Offers/HotOffersMain.module.css';

function HotOffersMain(props) {
	return (
		<div className={stylish.hot_offers_main_cont}>
			<HotBodySell
				hotTitles={props.hotTitles}
				hotSellImgs={props.hotSellImgs}
				hotLocations={props.hotLocations}
			/>
			<HotBodyRent
				hotTitlesRent={props.hotTitlesRent}
				hotImgsRent={props.hotImgsRent}
				hotLocations={props.hotLocations}
			/>
		</div>
	);
}
export default HotOffersMain;
