function Wrapper(props) {
	return (
		<div
			style={{
				maxWidth: '1200px',
				margin: '0 auto',
				zIndex: '0',
			}}
		>
			{props.children}
		</div>
	);
}

export default Wrapper;
