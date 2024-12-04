import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Section3({props}) {
	return ( 
		<section id="portfolio">
			<span className="portfolio_text d_only">
				<img src="/images/PORTFOLIO_top.png" className="portfolio_top" alt="portfolio top"/>
				<img src="/images/PORTFOLIO_btm.png" className="portfolio_bottom" alt="portfolio bottom"/>
			</span>
			<span className="portfolio_title hlv m_only">PortFolio</span>
			<div className="swiper_wrap">
				<Swiper
					slidesPerView={1}
					centeredSlides= {true}
					spaceBetween={10}
					pagination={{ clickable: true }}
					navigation={{ clickable: true }}
					breakpoints= {{
						768: {
							spaceBetween: 0,
							pagination: {
								el: ".portfolioSwiper .swiper-pagination",
								type: "fraction"
							},
							navigation: {
								clickable: true,
								prevEl: ".portfolioSwiper .swiper-button-prev",
								nextEl: ".portfolioSwiper .swiper-button-next"
							}
						}
					}}
					modules={[Pagination, Navigation]}
					className="swiper portfolioSwiper"
				>
					{
						props.map((d,i) =>
							<SwiperSlide key={i}>
								<div className="swiper_bg">
									<div className="swiper_text">
										<p className="cate">
											<span>{d.title}</span>
										</p>
										<p className="tit">{d.subtit}</p>
										<p className="txt">
											{
												d.text.map((d,index) =>
													<span key={index}>{d}</span>
												)
											}
										</p>
										{/* {
											d.text.map((d,index) =>
												<p className="txt" key={index}>
													<span>{d}</span>
												</p>	
											)
										} */}
										<a href={d.gitLink} className="btnMore">Read More</a>
									</div>
								</div>
							</SwiperSlide>
						)
					}
					{/* <SwiperSlide>
						<div className="swiper_bg">
							<div className="swiper_text pre">
								<p className="cate">
									<span>o’kichen</span>
								</p>
								<p className="tit">
									모바일 사용자에게 최적화된 환경을 제공하는 모바일 전용 APP
								</p>
								<p className="txt">
									<span>웹과 다르게  UI요소들을 세로로 배치. 작은 화면에서 보다 직관적으로 보이게 navigation,button 요소들을 단순화 하였습니다.</span>
									<span>Swiper를 화면 크기에 맞춰 디자인하여 사용자가 모바일 상에서 콘텐츠를 이용 할 때 불편함이 없도록 하였습니다.</span>
								</p>
								<a href="" className="hlv">Read More</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper_bg">
							<div className="swiper_text pre">
								<p className="cate">
									<span>artcenter nabi</span>
								</p>
								<p className="tit">
									css활용을 중심으로 만든 메인 페이지가 돋보이는 Web
								</p>
								<p className="txt">
									<span>pagenation을 추가하여 사용자가 슬라이드를 쉽게 탐색할 수 있도록 했습니다.</span>
									<span>video API를 활용하여 관련 기능을 구현하였습니다.</span>
									<span>navigation의 다양한 디자인을 보여주었습니다.</span>
								</p>
								<a href="" className="hlv">Read More</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper_bg">
							<div className="swiper_text pre">
								<p className="cate">
									<span>Wconcept</span>
								</p>
								<p className="tit">웹의 기본이 되는 요소를 활용 하여 만든 기본적인 Web </p>
								<p className="txt">
									<span>css로 구현하는 기본 동작인 호버 효과를 통해 사용자의 Interaction에 반응하는 효과를 보여주었습니다.</span>
									<span>navigation이 상태에 따라 다르게 변화 하도록 만들었습니다.</span>
								</p>
								<a href="" className="hlv">Read More</a>
							</div>
						</div>
					</SwiperSlide> */}
				</Swiper>
				{/*
				<div className="swiper portfolioSwiper">
					<div className="d_only">
						<div className="swiper-button-next"></div>
						<div className="swiper-button-prev"></div>
						<div className="swiper-pagination hlv"></div>
					</div>
				</div>
				*/}
				<div className="portfolio_btn">
					<div className="btn_s"><a href="" target="_blank">View All Project</a></div>
				</div>
			</div>
		</section>
	);
}

export default Section3;