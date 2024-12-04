import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Section4({props: {maintitle,swiperslide}}) {
	return (  
		<section id="open-source">
			<div className="main-tit">{maintitle}</div>

			<div className="swiper">
				<div className="swiper-wrapper">
					<Swiper
						loop={true}
						// speed={2000}
						slidesPerView={1}
						centeredSlides= {true}
						spaceBetween={25}
						navigation={false}
						pagination={{
							clickable: true,
							type: 'bullets',
							renderBullet: (index, d) => {
								return `<span class="${d}"></span>`;
							},
						}}
						// autoplay= {{
						// 	delay: 2000
						// }}
						breakpoints= {{
							769: {
								slidesPerView: 2,
								spaceBetween: 15
							},
							1025: {
								slidesPerView: 3,
								spaceBetween: 25
							}
						}}

						modules={[Navigation, Pagination]}
						className="swiper"
					>
						{
							swiperslide.map((d,i) =>
								<SwiperSlide key={i}>
									{/*
									<div className="thumb">
										<img src={`/images/${d.img}`}  alt={`{d.alt}${i+1}`}/>
									</div>
									*/}
									<div className="desc">
										<div className="name serif">{d.name}</div>
										<ul>
											{
												d.tag.map((d1,i) =>
													<li key={i}>{d1}</li>
												)
											}
										</ul>
										<p>
											{
												d.text.map((item, j) =>
													<span key={j}>- {item}</span>
												)
											}
										</p>
										<a href={d.gitLink} className="btn">View More</a>
									</div>
								</SwiperSlide>
							)
						}
						{/* 
						<SwiperSlide>
							<div className="thumb">
								<a href=""><img src="/images/project1.png" alt="project1"/></a>
							</div>
							<div className="desc">
								<div className="name serif">open source9</div>
								<ul>
									<li>React</li>
									<li>JavaScript map()</li>
									<li>JavaScript Fetch API</li>
								</ul>
								<p>
									<span>이 예제를 통해 외부 JSON 데이터를 로딩하는 기법으로 Fetch API를 활용하여 GNB의 HTML을 그리는 방법을 배웠습니다.</span>
									<span>EcmaScript의 map() 함수를 활용하여 리스트가 비어 있더라도 계속 실행되는 로직을 구현 할 수 있습니다.</span>
									<span>배열 내 중첩된 데이터를 처리하는방법을 배움으로써, 상품 목록,상품 옵션 처리,대시보드 위젯 목록,글 카데고리 및 태그 관리 등 다양한 형태도 구현 할 수 있습니다.</span>
								</p>
								<a href="" className="btn">View More</a>
							</div>
						</SwiperSlide>
						*/}
					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default Section4;