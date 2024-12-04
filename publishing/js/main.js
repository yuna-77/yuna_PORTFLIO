window.addEventListener("load", function(){
	let gnbList= document.querySelectorAll("#gnb li")
	let asideList=document.querySelectorAll(".controller li");
	let sectionList=document.querySelectorAll("section");
	let header=document.querySelector("#header");

	// page layout
	let pageList=[];

	pageList[0]=document.querySelector(".home");

	sectionList.forEach(function(item){
		pageList.push(item);
	});

	document.body.classList.add("dark");

	let n=0;
	let winh;
	let targety=0;
	let moving= false;

	function handleUI(n){
		asideList.forEach(function(item,i){
			if(i == n){
				asideList[i].classList.add("active");
				gnbList[i].classList.add("active");
			}
			else{
				asideList[i].classList.remove("active");
				gnbList[i].classList.remove("active");
			}
		});
	}

	handleUI(n);

	// scroll
	window.addEventListener("scroll", function(){
		if(scrollY > 100){
			header.classList.add("dark");
			header.classList.add("active");
		}
		else{
			header.classList.remove("dark");
			header.classList.remove("active");
		}
	});

	// click
	let topPos=0;

	pageList.forEach(function(page,i){
		asideList[i].addEventListener("click", function(e){
			e.preventDefault();

			n=i;
			
			if(i !== 3){
				topPos=pageList[i].offsetTop;
			}
			else{
				topPos=pageList[i-1].offsetTop+pageList[i-1].getBoundingClientRect().height;
			}

			gsap.to(window, { scrollTo: topPos, duration: 0.5, onComplete: function(){
				handleUI(n);
			} });
		});

		gnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			n=i;

			if(i !== 3){
				topPos=pageList[i].offsetTop;
			}
			else{
				topPos=pageList[i-1].offsetTop+pageList[i-1].getBoundingClientRect().height;
			}

			gsap.to(window, { scrollTo: topPos, duration: 0.5, onComplete: function(){
				handleUI(n);
			}});
		});
	});

	// mobile
	let tab=document.querySelector(".tabs");
	let floatMenu=document.querySelector(".floating_menu");
	let mobileLi=document.querySelectorAll(".mobile_menu li");

	tab.addEventListener("click", function(e){
		e.preventDefault();

		floatMenu.classList.toggle("active");
		if(floatMenu.classList.contains("active")){
			gsap.fromTo(floatMenu, { y: -1000 }, { y: 0, duration: 0.4 });
		}
		else{
			gsap.fromTo(floatMenu, { y: 0 }, { y: -1000, duration: 0.4 });
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


	// parallax
	const homeTl=gsap.timeline();

	homeTl.fromTo(".home .title strong span", 
		{ opacity: 0, y: 0 }, { opacity: 1, y: 15, duration: 0.75, stagger: 0.5 }
	);

	homeTl.fromTo(".home .title .introduce", 
		{ opacity: 0 }, { opacity: 1, duration: 0.75, delay: 0.2 }
	);

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
		{ opacity: 0, x: -200 },
		{ opacity: 1, x: 0, duration: 0.75 }
	);

	typoTl1.fromTo(".main-typo .typo-bottom",
		{ opacity: 0, x: 200 },
		{ opacity: 1, x: 0, duration: 0.75 }
	);

	const introTl=gsap.timeline({
		scrollTrigger: {
			trigger: ".flex-cont",
			start: "top center"
		}
	});

	introTl.fromTo(".flex-cont .img",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 0.75 }
	);

	introTl.fromTo(".flex-cont .profile",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 0.75 }
	);

	introTl.fromTo(".flex-cont .con",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 0.75 }
	);

	const typoTl2=gsap.timeline({
		scrollTrigger: {
			trigger: ".main-typo2", 
			start: "top center",
			onEnter: function(){
				console.log("enter");
			}
		}
	});

	typoTl2.fromTo(".main-typo2 span",
		{ opacity: 0, x: -200 },
		{ opacity: 1, x: 0, duration: 0.75, stagger: 0.4 }
	);

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
		{ opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.5 }
	);

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

	let mediaQuery=gsap.matchMedia();

	mediaQuery.add("(min-width: 769px)", function(){
		let deviceWidth=window.innerWidth;

		const updateTl=gsap.timeline({
			scrollTrigger: {
				trigger: "#portfolio",
				scrub: true,
				pin: true,
				start: "top top",
				end: "+="+1200
			}
		});

		updateTl.to(".portfolio_top", {
			x: deviceWidth >= 1920 ? 414 : (deviceWidth >= 1024 ? 265 : 90)
		}, "ontime1");

		updateTl.to(".portfolio_bottom", {
			x: deviceWidth >= 1920 ? -414 : (deviceWidth >= 1024 ? -265 : -90)
		}, "ontime1");

		updateTl.to(".portfolio_top", { y: -200 }, "ontime2");

		updateTl.to(".portfolio_bottom", { y: 200 }, "ontime2");

		updateTl.to(".portfolioSwiper", { display: "block", height: 400 }, "ontime2");

		updateTl.to(".portfolio_btn", { display: "block", opacity: 1});
	});

	mediaQuery.add("(max-width: 768px)", function(){
		gsap.from(".portfolio_title", {
			y: -50,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: "#portfolio",
				start: "top 80%",
				toggleActions: "play none none reset"
			}
		});
	});

	// swiperjs
	new Swiper(".portfolioSwiper", {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 10,
		breakpoints: {
			768: {
				spaceBetween: 0,
				pagination: {
					el: ".portfolioSwiper .swiper-pagination",
					type: "fraction"
				},
				navigation: {
					prevEl: ".portfolioSwiper .swiper-button-prev",
					nextEl: ".portfolioSwiper .swiper-button-next"
				}
			}
		}
	});

	const openSwiper=new Swiper("#open-source .swiper", {
		loop: true,
		speed: 2000,
		slidesPerView: 1.5,
		centeredSlides: true,
		spaceBetween: 20,
		autoplay: {
			delay: 2000
		},
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1025: {
				slidesPerView: 4.5,
				spaceBetween: 50
			}
		}
	});

	console.log(pageList);
});