import Link from 'next/link';
import stylish from '../styles/PrimaryNav.module.css';

function PrimaryNav() {
	return (
		<div className={stylish.container}>
			<div className={stylish.first}>
				<a href="https://kolesa.kz/" target="_blank">
					КОЛЕСА
				</a>
				<span>|</span>
				<Link href="/">
					<a>КРЫША</a>
				</Link>
				<span>|</span>
				<a
					href="https://market.kz/?utm_source=krisha.kz&utm_medium=link&utm_campaign=top_menu"
					target="_blank"
				>
					МАRКЕТ
				</a>
			</div>

			<div className={stylish.second}>
				<ul>
					<li>
						<Link href="/">
							<a>Избранное</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>История</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Сообщения</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Пополнить счет</a>
						</Link>
					</li>
					<li>
						<span>0 ед.</span>
					</li>
					<li>
						<button>Кабинет</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default PrimaryNav;
