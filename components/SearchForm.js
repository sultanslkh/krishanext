import { React, useState } from 'react';
import Link from 'next/link';
import Locations from './Locations';
import NewEstatesDrop from './NewEstatesDrop';
import stylish from '../styles/SearchForm.module.css';

function SearchForm(props) {
	const [active, setActive] = useState(false);
	const [activeNewEstates, setActiveNewEstates] = useState(false);
	const [appearFarmHouse, setAppearanceFarmHouse] = useState('none');
	const [appearAppart, setAppearanceAppart] = useState('flex');
	const [appearOffice, setAppearanceOffice] = useState('none');

	function typeHandler(e) {
		if (
			e.target.value === props.realstatetype.at(0).name ||
			e.target.value === props.realstatetype.at(1).name
		) {
			setAppearanceAppart('flex');
			setAppearanceFarmHouse('none');
			setAppearanceOffice('none');
		}
		if (
			e.target.value === props.realstatetype.at(2).name ||
			e.target.value === props.realstatetype.at(3).name
		) {
			setAppearanceFarmHouse('flex');
			setAppearanceAppart('none');
			setAppearanceOffice('none');
		}

		if (
			e.target.value === props.realstatetype.at(4).name ||
			e.target.value === props.realstatetype.at(5).name ||
			e.target.value === props.realstatetype.at(6).name ||
			e.target.value === props.realstatetype.at(7).name
		) {
			setAppearanceAppart('none');
			setAppearanceFarmHouse('none');
			setAppearanceOffice('flex');
		}
		if (
			e.target.value === props.realstatetype.at(8).name ||
			e.target.value === props.realstatetype.at(9).name
		) {
			setAppearanceAppart('none');
			setAppearanceFarmHouse('none');
			setAppearanceOffice('none');
		}
	}

	function showModal() {
		setActive(true);
	}

	function showModalNewEstates() {
		setActiveNewEstates(true);
	}

	function hideModal() {
		setActive(false);
	}

	function hideNewEstatesModal() {
		setActiveNewEstates(false);
	}

	return (
		<>
			<section className={stylish.mainsection}>
				<div action="/">
					<div className={stylish.inputswrap}>
						<div className={stylish.inputs}>
							<div className={stylish.searchblock}>
								<select>
									<option>Купить</option>
									<option>Арендовать</option>
								</select>
							</div>

							<div className={stylish.searchcategory}>
								<select onChange={typeHandler}>
									{props.realstatetype.map((type) => (
										<option>{type.name}</option>
									))}
								</select>
							</div>

							{/* //////////////////////////  */}

							<div className={stylish.region}>
								<button onClick={showModal} className="show-region-list">
									Весь Казахстан
								</button>
							</div>

							{/* //////////////////////////  */}

							<div className={stylish.searchBlockFilters}>
								<div style={{ display: `${appearAppart}` }}>
									<select>
										{props.rooms.map((room) => (
											<option>{room.quantity}</option>
										))}
									</select>
								</div>

								<div
									className="for-farmhouse special-areas"
									style={{ display: `${appearFarmHouse}` }}
								>
									<label>От</label>
									<input type="number" />
									<label>До</label>
									<input type="number" />
									<label>соток</label>
								</div>

								<div
									className="special-areas officies special shops"
									style={{ display: `${appearOffice}` }}
								>
									<label>От</label>
									<input type="number" />
									<label>До</label>
									<input type="number" />
									<label>м2</label>
								</div>

								<div className={stylish.prices}>
									<input placeholder="От" type="number" />
									<span style={{ margin: '0 5px' }}>-</span>
									<input placeholder="До" type="number" />
								</div>
								<span>тг</span>
							</div>
							<div className={stylish.submits}>
								<button>Найти</button>
								<button>На карте</button>
							</div>
						</div>

						<div className={stylish.checkboxconditions}>
							<div>
								<input type="checkbox" />
								<span>есть фото</span>
							</div>
							<div onMouseEnter={showModalNewEstates}>
								<input type="checkbox" />
								<span>Новостройки</span>
							</div>
							<div>
								<input type="checkbox" />
								<span>от хозяев</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{active && <Locations hideModal={hideModal} locations={props.location} />}

			{activeNewEstates && (
				<NewEstatesDrop hideNewEstatesModal={hideNewEstatesModal} />
			)}
		</>
	);
}

export default SearchForm;
