function Nav({props: {depth1}}) {

	return (
		<ul>
			{
				depth1.map((d,i) =>
					<li key={i}><a href="">{d}</a></li>
				)
			}
		</ul>
	);
}

export default Nav;