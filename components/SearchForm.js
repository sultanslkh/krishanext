import { React, useState } from 'react';
import Link from 'next/link';
import Locations from './Locations';
import stylish from '../styles/SearchForm.module.css';

function SearchForm(props) {
	const [active, setActive] = useState(false);
	const [appearFarmHouse, setAppearanceFarmHouse] = useState('none');
	const [appearAppart, setAppearanceAppart] = useState('none');
	const [appearOffice, setAppearanceOffice] = useState('none');

	function typeHandler(e) {
		console.log(e.target.value);
		if (e.target.value === 'дачу' || e.target.value === 'участок')
			setAppearanceFarmHouse('block');

		if (e.target.value === 'квартиру' || e.target.value === 'дом')
			setAppearanceAppart('block');

		if (
			e.target.value === 'офис' ||
			e.target.value === 'помещение' ||
			e.target.value === 'здание' ||
			e.target.value === 'магазин, бутик'
		)
			setAppearanceOffice('block');
	}

	function showModal() {
		setActive(true);
	}

	function hideModal() {
		setActive(false);
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
								<div style={{ display: { appearAppart } }}>
									<select>
										{props.rooms.map((room) => (
											<option>{room.quantity}</option>
										))}
									</select>
								</div>

								<div
									className="for-farmhouse special-areas"
									style={{ display: 'none' }}
								>
									<label>От</label>
									<input type="number" />
									<label>До</label>
									<input type="number" />
									<label>соток</label>
								</div>

								<div
									className="special-areas officies special shops"
									style={{ display: 'none' }}
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
							<div>
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
		</>
	);
}

export default SearchForm;
