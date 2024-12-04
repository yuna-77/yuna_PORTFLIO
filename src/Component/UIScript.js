import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function UIScript() {
	useEffect(() => {
		let gnbList= document.querySelectorAll("#gnb li")
		let asideList=document.querySelectorAll(".controller li");
		let sectionList=document.querySelectorAll("section");

		let pageList=[];

		pageList[0]=document.querySelector("#header");

		sectionList.forEach(function(item){
			pageList.push(item);
		});

		pageList.forEach(function(item, i){
			let startValue="top 80%";

			if(i === 4){
				startValue="top 0%";
			}

			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: startValue,
					end: "bottom 20%",
					onEnter: function(){
						controlMenu(i);
					},
					onEnterBack: function(){
						controlMenu(i);
					}
				}
			});
		});

		function controlMenu(n){
			gnbList.forEach(function(item, i){
				if(i === n){
					gnbList[i].classList.add("active");
					asideList[i].classList.add("active");
				}
				else{
					gnbList[i].classList.remove("active");
					asideList[i].classList.remove("active");
				}
			});
		}

		let topPos=0;

		pageList.forEach(function(page, i){
			asideList[i].addEventListener("click", function(e){
				e.preventDefault();
				
				if(i !== 3){
					topPos=pageList[i].offsetTop;
				}
				else{
					topPos=pageList[i-1].offsetTop+pageList[i-1].getBoundingClientRect().height;
				}

				gsap.to(window, { scrollTo: topPos, duration: 0.5 });
			});

			gnbList[i].addEventListener("click", function(e){
				e.preventDefault();

				if(i !== 3){
					topPos=pageList[i].offsetTop;
				}
				else{
					topPos=pageList[i-1].offsetTop+pageList[i-1].getBoundingClientRect().height;
				}

				gsap.to(window, { scrollTo: topPos, duration: 0.5 });
			});
		});

		document.body.classList.add("dark");
		
		// Section
		// home
		const homeTl=gsap.timeline();

		homeTl.fromTo(".home .title strong span", 
			{ opacity: 0, y: 0 }, { opacity: 1, y: 15, duration: 0.75, stagger: 0.5 }
		);

		homeTl.fromTo(".home .title .introduce", 
			{ opacity: 0 }, { opacity: 1, duration: 0.75, delay: 0.2 }
		);

		// about
		const aboutTl=gsap.timeline({
			scrollTrigger: {
				trigger: "#main-about",
				start: "top top",
				end: "bottom 30%",
				scrub: true,
				onEnter: function(){
					document.body.classList.remove("dark");
				},
				onLeaveBack: function(){
					document.body.classList.add("dark");
				}
			}
		});
		
		const typoTl1=gsap.timeline({
			scrollTrigger: {
				trigger: ".main-typo .typo-top", 
				start: "top center"
			}
		});

		typoTl1.fromTo(".main-typo .typo-top",
			{ opacity: 0, x: -500 },
			{ opacity: 1, x: 0, duration: 1 }
		);

		typoTl1.fromTo(".main-typo .typo-bottom",
			{ opacity: 0, x: 500 },
			{ opacity: 1, x: 0, duration: 1 }
		);

		const typoTl2=gsap.timeline({
			scrollTrigger: {
				trigger: ".main-typo2", 
				start: "top center",
			}
		});
		
		typoTl2.fromTo(".main-typo2 span",
			{ opacity: 0, x: -200 },
			{ opacity: 1, x: 0, duration: 0.75, stagger: 0.4 }
		);

		const introTl=gsap.timeline({
			scrollTrigger: {
				trigger: ".flex-cont",
				start: "top center"
			}
		});
		
		introTl.fromTo(".flex-cont .profile",
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.75 }
		);
		introTl.fromTo(".flex-cont .con",
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.75 }
		);
		/*
		const introT2=gsap.fromTo(".flex-cont .img", 
			{
			  scale: 0.5,
			  opacity: 0.5,
			}, 
			{
			  scale: 1,  // 원래 사진 크기
			  opacity: 1,
			  scrollTrigger: {
				trigger: ".flex-cont",
				start: "top center",
				scrub: true
			  },
			}
		);
		*/

		// skill
		const skillTl=gsap.timeline({
			scrollTrigger: {
				trigger: "#skills",
				start: "top center",
				end: "+=1000",
				onEnter: function(){
					document.body.classList.add("dark");
				},
				onLeaveBack: function(){
					document.body.classList.remove("dark");
				}
			}
		});

		skillTl.fromTo(".skill-box",
			{ opacity: 0, y: 100 },
      		{ opacity: 1, 
				y: 0, 
				stagger: 0.5, 
				duration: 0.75,
				scrollTrigger: {
					trigger: ".skill-wrap",
					start: "top 80%", 
					scrub: 1, //end없애서 역방향으로도 효과 만듬
				}
			},
		)

		// portfolio
		const portfolioTl=gsap.timeline({
			scrollTrigger: {
				trigger: "#portfolio",
				start: "top top",
				end: "bottom top",
				scrub:true,
				onEnter: function(){
					document.body.classList.remove("dark");
				},
				onLeaveBack: function(){
					document.body.classList.add("dark");
				}
			}
		});

		const portfolioT2=gsap.timeline({
			scrollTrigger: {
				trigger: "#portfolio",
				scrub: true,
				pin: true,
				start: "top top",
				end: "+="+1200
			}
		});
		
		portfolioT2.to(".portfolio_top", { y: -200 }, "ontime2");

		portfolioT2.to(".portfolio_bottom", { y: 200 }, "ontime2");

		portfolioT2.to(".portfolioSwiper", { display: "block", height: 400 }, "ontime2");

		portfolioT2.to(".portfolio_btn", { display: "block", opacity: 1});
		

		// mobile
		let tab=document.querySelector(".tabs");
		let floatMenu=document.querySelector(".floating_menu");
		let mobileLi=document.querySelectorAll(".mobile_menu li");
	
		gsap.set(floatMenu, { y: "-100%" });

		tab.addEventListener("click", function(e){
			e.preventDefault();
	
			floatMenu.classList.toggle("active");
			if(floatMenu.classList.contains("active")){
				gsap.to(floatMenu, { y: 0, duration: 0.4 });
			}
			else{
				gsap.to(floatMenu, { y: "-100%", duration: 0.4 });
			}
	
			tab.classList.toggle("active");
		});
	
		mobileLi.forEach(function(item,i){
			item.addEventListener("click", function(e){
				e.preventDefault();
	
				mobileLi.forEach(function(li,j){
					if(j == i){
						li.classList.add("active");
					}
					else{
						li.classList.remove("active");
					}
				});
			});
		});

	});

	return (
		<></>
	);
}

export default UIScript;