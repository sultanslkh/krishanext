import { useRouter } from 'next/router';

function Nav() {
	const { query } = useRouter();
	console.log(query);

	return (
		<div>
			<h1>NAV with id {query.id}</h1>
		</div>
	);
}

export default Nav;
