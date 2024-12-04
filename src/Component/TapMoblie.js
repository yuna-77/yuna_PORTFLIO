function TapMoblie() {
	return (
		<>
			<div className="tabs">
				<a href="">
					<i className="accessbility">tabs</i>
					<span></span>
					<span></span>
					<span></span>
				</a>
			</div>
			<div className="floating_menu">
				<div className="mobile_menu">
					<ul>
						<li className="active"><a href="#header">HOME</a></li>
						<li><a href="#page1">ABOUT</a></li>
						<li><a href="#page2">SKILLS</a></li>
						<li><a href="#page3">PORTFOLIO</a></li>
						<li><a href="#page4">OPEN SOURCE</a></li>
					</ul>
				</div>
			</div>
			<div className="controller">
				<ul>
					<li className="active">
						<a href="" title="HOME"></a>
						<span>HOME</span>
					</li>
					<li>
						<a href="" title="ABOUT"></a>
						<span>ABOUT</span>
					</li>
					<li>
						<a href="" title="SKILLS"></a>
						<span>SKILLS</span>
						
					</li>
					<li>
						<a href="" title="PORTFOLIO"></a>
						<span>PORTFOLIO</span>
					</li>
					<li>
						<a href="" title="OPEN SOURCE"></a>
						<span>OPEN SOURCE</span>
					</li>
				</ul>
			</div>
			<div className="copy"><p>©YUNA All rights reserved.</p></div>
		</>
	);
}

export default TapMoblie;