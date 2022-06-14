import { React } from 'react';
import Link from 'next/link';
import stylish from '../styles/Locations.module.css';

function Locations(props) {
	return (
		<div>
			<div className={stylish.main_drop_menu}>
				<div className={stylish.triangle} />
				<span onClick={props.hideModal}>&#88;</span>
				<div className={stylish.main_drop_inner}>
					<div className={stylish.index_region}>
						<div className={stylish.input_body}>
							<div className={stylish.input_actions}>
								<button className={stylish.btn_search}>kek</button>
							</div>
							<input placeholder="Поиск по городу, району, микрорайону" />
						</div>
					</div>
					<div className={stylish.drop_selects}>
						<div className={stylish.leveled_select_visiable}>
							<select className={stylish.select} size="20">
								{props.locations.map((loc) => (
									<option>{loc.title}</option>
								))}
							</select>
							<Link href="/">
								<a className={stylish.btn_primary_region}>Выбрать</a>
							</Link>
						</div>
						<div className={stylish.leveled_select_visiable2}>
							<select className={stylish.select} size="20">
								{props.locations.map((loc) => (
									<option>{loc.title}</option>
								))}
							</select>
							<Link href="/">
								<a className={stylish.btn_primary_region}>Выбрать</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className={stylish.backdrop} onClick={props.hideModal} />
		</div>
	);
}

export default Locations;
