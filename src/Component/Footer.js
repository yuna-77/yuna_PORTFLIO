function Footer({props: {info,sns}}) {
	//console.log({props: {info,sns}});

	return (
		<footer id="footer">
			<div className="ft-wrap">
				<div className="ft-left">
					<div className="ft-logo">
						<a href="">logo</a>
					</div>
					<div className="ft-info">
						<p>
							<span><strong>PHONE</strong>{info.phone}</span>
							<span><strong>MAIL</strong>{info.mail}</span>
						</p>
						<p>
							<span><strong>GIT</strong>{info.git}</span>
							<span><strong>NOTION</strong>{info.notion}</span>
						</p>
					</div>
				</div>
				<div className="ft-right">
					<div className="ft-sns">
						{
							sns.map((d,i) =>					
								<a href={d.url} key={i}><i className={d.iconClass}></i></a>							
							)
						}
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;