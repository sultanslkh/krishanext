import { React, useRef, useEffect } from 'react';
import Link from 'next/link';
import stylish from '../styles/Locations.module.css';

function Locations(props) {
	return (
		<div>
			<div className={stylish.main_drop_menu}>
				<span onClick={props.hideModal}>&#88;</span>
				<div className={stylish.main_drop_inner}>
					<div className={stylish.index_region}>
						<input placeholder="Поиск по городу, району, микрорайону" />
					</div>
					<div className={stylish.drop_selects}>
						<select className={stylish.select} size="20">
							{props.locations.map((loc) => (
								<option>{loc.title}</option>
							))}
						</select>
					</div>
					<div className={stylish.drop_selects_visible}>
						<select className={stylish.select} size="20">
							{props.locations.map((loc) => (
								<option>{loc.title}</option>
							))}
						</select>
					</div>
					<Link href="/">
						<a className={stylish.btn_primary_region}>Выбрать</a>
					</Link>
				</div>
			</div>

			<div className={stylish.backdrop} onClick={props.hideModal} />
		</div>
	);
}

export default Locations;
