import { React, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import stylish from '../../styles/Hot-Offers/HotBodySell.module.css';
import 'bootstrap/dist/css/bootstrap.css';

function HotBodySell(props) {
	let [nextHotsMoving, setNextHotMoving] = useState(0);
	let [dropping, setDropping] = useState(false);

	function nextHotHandler() {
		setNextHotMoving((prev) => prev - 1170);
		if (nextHotsMoving === -3510) setNextHotMoving(0);
	}

	function prevHotHandler() {
		setNextHotMoving((prev) => prev + 1170);
		if (nextHotsMoving >= 0) setNextHotMoving(-3510);
	}

	function dropHandler() {
		setDropping(true);
	}

	return (
		<div className={stylish.main_hot}>
			<div className={stylish.titles_hot}>
				<ul className={stylish.list_titles_hot}>
					<strong>Продажа</strong>
					{props.hotTitles.map((title) => (
						<li>
							<Link href="/">
								<a>{title.title}</a>
							</Link>
						</li>
					))}
				</ul>
				<div className={stylish.advertisement_title}>
					<Link href="/">
						<a>Недвижимость в Турции</a>
					</Link>
				</div>
			</div>

			<button className={stylish.btn_prev_hot} onClick={prevHotHandler}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="leftBtn"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			{/* SLIDER */}
			<div className={stylish.cont_images_sell_slider}>
				<div
					className={stylish.hot_object}
					style={{ marginLeft: `${nextHotsMoving}px` }}
				>
					{/* add IMAGES next!!! */}
					<div className={stylish.hot_images_row}>
						{props.hotSellImgs.map((img) => {
							return (
								<div className={stylish.hot_wrapper}>
									<Link href="/">
										<a className={stylish.hot_wrap}>
											<span className={stylish.drop_city}>{img.cityName}</span>
											<img
												src={img.imgUrl}
												alt="appartmant"
												width={120}
												height={90}
											/>
											<span className={stylish.drop_price}>{img.price}</span>
											<span className={stylish.hot_price}>{img.price}</span>
											<span className={stylish.hot_title}>{img.title}</span>
											<span className={stylish.drop_title}>{img.title}</span>
										</a>
									</Link>
								</div>
							);
						})}
					</div>
					{/* Images ends */}
				</div>
			</div>
			<button onClick={nextHotHandler} className={stylish.btn_next_hot}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="rightBtn"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	);
}
export default HotBodySell;
