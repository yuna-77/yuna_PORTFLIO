function Section1({props: {introduce,profile}}) {
	// console.log(introduce, profile);

	let data=profile.textBox;

	return (
		<section id="main-about">
			<div className="main-typo">
				<div className="typo-top">
					<span className="italic">Beyond</span>
					<span className="serif">Creation,</span>
				</div>
				<div className="typo-bottom">
					<span>Innovative</span>
					<span>Developer</span>
				</div>
			</div>
			<div className="flex-cont">
				<div className="img">
					<div className="img-wrap scale-ani">
						<img src={`/images/${introduce.img}`} alt={introduce.alt}/>
					</div>
				</div>
				<div className="con">
					<div className="txt">
						<p className="serif">{introduce.title}</p>
						{
							introduce.text.map((d,i) =>
								<span key={i}>{d}</span>
							)
						}
						{/* <span>웹과 모바일 환경에서 활용 가능한 기술과</span>
						<span>어느 프로젝트에서나 해결 할 수 있는 문제 해결 능력을 키운</span>
						<span>매력적인 사용자 경험을 창출하는 조유나 입니다.</span> */}
					</div>
				</div>
				<Profile propsValue={profile} />
			</div>
			<div className="main-typo2 typo2">
				<span>Publishing Tomorrow</span>
				<span className="color">with</span>
				<span>Creativity and Vision</span>	
			</div>
		</section>
	);
}

function Profile(props){
	let {title, textBox}=props.propsValue;

	return(
		<div className="profile">
			<dl className="top">
				<dt>{title[0]}</dt>
				<dd>
					<p className="subtitle">Name</p>
					<p>{textBox.name}</p>
				</dd>
				<dd>
					<p className="subtitle">Phone</p>
					<p>{textBox.phone}</p>
				</dd>
				<dd>
					<p className="subtitle">Email</p>
					<p>{textBox.mail}</p>
				</dd>
			</dl>
			<dl className="bottom">
				<dt>{title[1]}</dt>
				<dd>
					<p className="subtitle">00.00</p>
					<p>{textBox.graduation}</p>
				</dd>
			</dl>
		</div>
	)
}

export default Section1;