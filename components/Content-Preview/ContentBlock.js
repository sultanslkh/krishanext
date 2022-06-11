import stylish from '../../styles/Pre-Content/ContentBlock.module.css';
import Link from 'next/link';

function ContentBlock(props) {
	return (
		<div className={stylish.main_container}>
			{props.contentBlockHeaders.map(
				(header) =>
					header.id === props.id && (
						<div className={stylish.content_header}>
							<h2>
								<Link href="/">
									<a className={stylish.content_header_h2}>{header.title}</a>
								</Link>
							</h2>
							<span>{header.quantity}</span>
						</div>
					)
			)}

			<div className={stylish.content_body}>
				{props.contentImg.map(
					(imgCont) =>
						imgCont.id === props.id && (
							<div className={stylish.content_row}>
								<div className={stylish.content_img}>
									<Link href="/">
										<a>
											<img
												height={100}
												width={150}
												src={imgCont.urlImg}
												alt="news"
											/>
										</a>
									</Link>
								</div>
								<div className={stylish.content_descr}>
									<Link href="/">
										<a className={stylish.content_descr_title}>
											{imgCont.imgTitle}
										</a>
									</Link>

									<div className={stylish.content_descr_txt}>
										{imgCont.imgTitleDesc}
									</div>
								</div>
							</div>
						)
				)}

				<ul className={stylish.link_list}>
					{props.contentList.map((list) => (
						<li>
							<Link href="/">
								<a>{list.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContentBlock;
