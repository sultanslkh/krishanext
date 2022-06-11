function SEOParagraph(props) {
	return (
		<>
			{props.seoParagraph.map((paragr) => (
				<p style={{ color: '#666', fontSize: '13px', lineHeight: '20px' }}>
					{paragr.paragraph}
				</p>
			))}
		</>
	);
}

export default SEOParagraph;
