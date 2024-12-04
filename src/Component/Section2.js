function Section2({props: {maintitle,textbox}}) {

	return (
		<section id="skills">
			<div className="skill-inner">
				<div className="main-tit">{maintitle}</div>
				<div className="skill-wrap">		
					{
						textbox.map((d,i) =>
							<div className="skill-box" key={i}>
								<a href="">
									<p className="pre">{d.title}</p>
									<span className="pre">
										<span className="title">{d.subtit}</span>
										{
											d.text.map((d,index) => 
												<span key={index}>{d}</span>												
											)
										}
									</span>	
								</a>
							</div>
						)
					}
				</div>
			</div>
		</section>
	);
}

export default Section2;