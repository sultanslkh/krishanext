import { React, useState } from 'react';
import stylish from '../UI/Slider.module.css';
import Link from 'next/link';

function Slider(props) {
	const [nextHotsMoving, setNextHotMoving] = useState(0);

	function nextHotHandler() {
		setNextHotMoving((prev) => prev - 1170);
		if (nextHotsMoving === -3510) setNextHotMoving(0); //custom: should be changed
	}
	function prevHotHandler() {
		setNextHotMoving((prev) => prev + 1170);
		if (nextHotsMoving >= 0) setNextHotMoving(-3510); //custom: should be changed
	}

	return (
		<div className={stylish.slider_main_cont}>
			{/* BUTTON PREV */}
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
			{/* // */}

			{/* SLIDER */}
			{/* <div className={stylish.main_container}> */}
			<div className={stylish.cont_images_sell_slider}>
				<div
					className={stylish.hot_object}
					style={{ marginLeft: `${nextHotsMoving}px` }}
				>
					<div className={stylish.hot_images_row}>
						{props.hotImgs.map((img) => {
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
											{/* <span className={stylish.drop_title}>{img.title}</span> */}
										</a>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* </div> */}

			{/* BUTTON NEXT */}
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
			{/* // */}
		</div>
	);
}

export default Slider;
