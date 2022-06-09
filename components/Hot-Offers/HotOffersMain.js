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
			<HotBodyRent />
		</div>
	);
}
export default HotOffersMain;
