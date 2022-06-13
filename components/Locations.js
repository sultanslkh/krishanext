import { React, useRef, useEffect } from 'react';
import stylish from '../styles/Locations.module.css';

function Locations(props) {
	return (
		<div>
			<div className={stylish.main_drop_cont}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={stylish.arrow}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5 15l7-7 7 7"
					/>
				</svg>
				<span onClick={props.hideModal}>&#88;</span>
				<input placeholder="Поиск по городу, району, микрорайону" />
				<div>
					<select className={stylish.select} size="20">
						{props.locations.map((loc) => (
							<option>{loc.title}</option>
						))}
					</select>
				</div>
			</div>

			<div className={stylish.backdrop} onClick={props.hideModal} />
		</div>
	);
}

export default Locations;
