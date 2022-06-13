import Link from 'next/link';
import stylish from '../styles/Footer.module.css';
function Footer() {
	return (
		<div className={stylish.container_footer}>
			<div className={stylish.footer_row}>
				<div className={stylish.clmn_xs2}>
					<span>© 2006 — 2022 «Крыша»</span>
					<Link href="/">
						<a className={stylish.clmn_xs2_a}>Пользовательское соглашение</a>
					</Link>
					<Link href="/">
						<a className={stylish.clmn_xs2_a}>Карта сайта</a>
					</Link>
					<Link href="/">
						<a className={stylish.clmn_xs2_a}>Правило размещения объявлений</a>
					</Link>
				</div>
				<div className={stylish.clmn_xs5}>
					<div className={stylish.row}>
						<div className={stylish.second_side}></div>
						<div className={stylish.third_side}></div>
					</div>
				</div>
				<div className={stylish.clmn_xs5}></div>
			</div>
		</div>
	);
}

export default Footer;
