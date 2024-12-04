function Home({props}) {
	//console.log(props.title[0]);

	return (
		<div className="home">
			<div className="title">
				{
					props.title.map((d,i) =>
						<strong key={i}>
							<span>{d}</span>
						</strong>
					)
				}
				<span className="introduce">
					<p>{props.subtitle}</p>
				</span>
			</div>
			<div className="key-img"></div>
		</div>
	);
	
}

export default Home;