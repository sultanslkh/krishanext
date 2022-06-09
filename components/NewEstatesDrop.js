import stylish from '../styles/NewEstatesDrop.module.css';

function NewEstatesDrop(props) {
	return (
		<div
			className={stylish.estates_main_container}
			onMouseLeave={props.hideNewEstatesModal}
		>
			<div className={stylish.checkbox_title}>
				<input type="checkbox" />
				<span>Новостройки</span>
			</div>
			<div className={stylish.estates_context}>
				<strong>Первичное жилье</strong>
				<p>Ищите проверенные объявления от застройщиков.</p>
			</div>
		</div>
	);
}

export default NewEstatesDrop;
