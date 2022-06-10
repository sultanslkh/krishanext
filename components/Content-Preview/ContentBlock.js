import stylish from '../../styles/Pre-Content/ContentBlock.module.css';
import Link from 'next/link';

function ContentBlock(props) {
	return (
		<div className={stylish.main_container}>
			<div className={stylish.content_header}>
				<h2 className={stylish.news_header_h2}>
					<Link href="/">
						<a>Новости</a>
					</Link>
				</h2>
				<span>8300</span>
			</div>
			<div className={stylish.content_body}>
				{/* {props.contentNewsImg.map(imgInfo=>)} */}
				<div className={stylish.content_row}>
					<div className={stylish.content_img}>
						<Link href="/">
							<a>
								<img src="/" alt="news" />
							</a>
						</Link>
					</div>
					<div className={stylish.content_descr}>
						<Link href="/">
							<a className={stylish.content_descr_title}>
								В роще Баума вырубят больше 3 000 деревьев
							</a>
						</Link>

						<div className={stylish.content_descr_txt}>
							Учёные настаивают на санитарной вырубке
						</div>
					</div>
				</div>
				<ul className={stylish.link_list}>
					{props.contentNewsList.map((list) => (
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
