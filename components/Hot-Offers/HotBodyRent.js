import HotBodyRentHead from './HotBodyRentHead';
import Slider from '../../UI/Slider';

function HotBodyRent(props) {
	return (
		<div>
			<div style={{ backgroundColor: '#fff3db' }}>
				<HotBodyRentHead hotTitlesRent={props.hotTitlesRent} />
				<Slider hotImgs={props.hotImgsRent} />
			</div>
		</div>
	);
}
export default HotBodyRent;
