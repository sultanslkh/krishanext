import HotBodySellHead from './HotBodySellHead';
import Slider from '../../UI/Slider';

function HotBodySell(props) {
	return (
		<div>
			<HotBodySellHead hotTitles={props.hotTitles} />
			<Slider hotImgs={props.hotSellImgs} />
		</div>
	);
}
export default HotBodySell;
