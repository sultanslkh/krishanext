import { useRouter } from 'next/router';
function Nav() {
	const { query } = useRouter();
	console.log(query);

	return (
		<div>{/* {query.id === 'sells' && <SellsMainPage></SellsMainPage>} */}</div>
	);
}

export default Nav;
