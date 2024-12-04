const data={
	nav: {
		depth1: ["HOME", "ABOUT", "SKILLS", "PORTFOLIO", "OPEN SOURCE"]
	},
	home: {
		title:["WEB Publisher","JO YUNA PORTFOLIO."],
		subtitle:"배움에 대한 적극적인 마음과 자세로 발전해나가는 신입 웹디자이너 조유나입니다."
	},
	section1: {
		introduce: {
			img: "main_about1.jpg", alt: "main about1",
			title: "I`m a Frontend Developer",
			text: [
				"웹과 모바일 환경에서 활용 가능한 기술과",
				"어느 프로젝트에서나 해결 할 수 있는 문제 해결 능력을 키운",
				"매력적인 사용자 경험을 창출하는 퍼블리셔를 목표로 하고 있습니다."
			]
		},
		profile: {
			title: ["PROFILE", "EDUCATION"],
			textBox: {
				name: "조유나",
				phone: "010-0000-0000",
				mail: "nyuu077@gamil.com",
				graduation: "한양여자대학교 졸업"
			}
		},
	},
	section2: {
		maintitle: "SKILLS",
		textbox: [
			{
				classNmae: "box1",
				title: "HTML",
				subtit: "인터넷 접근성, 웹 표준을 준수한 HTML을 작성",
				text: ["웹 접근성을 높인 Semantic Page 작성","다양한 라이브러리를 활용하여 웹을 구현"]
			},
			{
				classNmae: "box2",
				title: "CSS",
				subtit: "다양한 라이브러리를 활용하여 웹을 구현",
				text: ["IR 기법을 이용한 스타일 작성",
					"인터넷 접근성, 웹 표준을 준수한 HTML을 작성",
					"모바일 페이지 스타일 작성",
					"반응형 웹 페이지 스타일 작성"]
			},
			{
				classNmae: "box3",
				title: "SCSS", 
				subtit: "효율적인 스타일링과 유지보수성을 고려한 CSS 작업 가능",
				text: ["CSS 전 처리 기능 프로그래밍 작성","비슷한 CSS 전 처리 언어 LESS, Stylus 작성"]
			},
			{
				classNmae: "box4",
				title: "jQuery",
				subtit: "다양한 라이브러리를 활용하여 웹을 구현",
				text: ["DOM을 조작하여 HTML 문서 구조를 쉽게 탐색하고 수정",
						"실무에서 많이 사용하는 JavaScript 코드 유형 습득"]
			},
			{
				classNmae: "box5",
				title: "PWA",
				subtit: "모바일 환경에서도 원활한 사용성을 보장할 수 있는 앱을 구축",
				text: ["HTML, CSS, JavaScript와 같은 웹 기술로 만드는 앱 구현",
						"웹 애플리케이션이 네이티브 앱처럼 동작하도록 최적화"]
			},
			{
				classNmae: "box6",
				title: "JavaScript",
				subtit:"EcmaScript 기반의 Native JavaScript 기초 습득",
				text: [
					"GSAP Animation Library 활용",
					"SwiperJS Slider Library 활용",
					"Parallax 웹 페이지 구현",
					"JavaScript API 구현",
					"외부 API 구현(Google Map API, Video API)",
					"JavaScript 플러그인 활용 및 구현"
				]
			},
			{
				classNmae: "box7",
				title: "Git",
				subtit: "GitHub를 활용한 Git 시스템 협업 가능",
				text: ["복잡한 프로젝트에서도 효율적인 협업과 코드 관리가 가능",
					"GitHub를 활용 하여 소스 코드의 일관성과 안정성 확보 가능" ]
			},
			{
				classNmae: "box8",
				title: "React",
				subtit: "컴포넌트 기반 아키텍처를 통해 효율적이고 재사용 가능한 UI 구축 가능",
				text: ["React를 활용한 사용자 인터페이스 구현", "React에서의 다양한 라이브러리 활용(Redux, Router, Axios)"]
			},
			{
				classNmae: "box9",
				title: "Figma",
				subtit: "디자인과 개발 간의 원활한 협업 실현",
				text: ["실시간 협업 기능을 활용하여 팀원들과 원활하게 소통",
						"디자인 피드백을 빠르게 반영한 효율적인 작업 가능"]
			},
			{
				classNmae: "box10",
				title: "PhotoShop",
				subtit: "프론트엔드 웹에서 필요한 시각적 요소를 효율적으로 제작",
				text: ["PSD 파일을 HTML/CSS로 변환하는 작업 가능",
						"디자인 요소를 웹 퍼블리싱에 적합한 형태로 변환하여 개발팀과 원활하게 협업 가능"]
			},
		]
	},
	section3: [
		{
			title: "Wylie",
			subtit: "사용자의 환경에 맞는 기능을 제공하는 Progressive Web,App",
			text: [
				"미디어 쿼리를 활용하여 mobile, tablet, decktop에 최적화된 레이아웃을 구현했습니다.",
				"섹션에 폼 형식을 넣어 사용자의 정보를 입력 부분을 만들었고 버튼 같은 시각적 요소가 명확하게 보이게 했습니다.",
				"GSAP의 기본을 사용하여 웹이 동적으로 변화되도록 했습니다."
			],
			gitLink: "https://yuna-77.github.io/Wylie/"
		},
		{
			title: "o’kichen",
			subtit: "모바일 사용자에게 최적화된 환경을 제공하는 모바일 전용 APP",
			text: [
				"웹과 다르게  UI요소들을 세로로 배치하고 작은 화면에서 보다 직관적으로 보이게 navigation,button 요소들을 단순화 하였습니다.",
				"Swiper 기능을 메인 페이지에 적용하여, 사용자들이 상품 이미지나 세부 정보를 직관적으로 슬라이드 방식으로 탐색할 수 있도록 했습니다."
			],
			gitLink: "https://yuna-77.github.io/o_kichen/"
		},
		{
			title: "artcenter nabi",
			subtit: "메인 페이지에 동적인 Swiper를 적용한 Interective Web",
			text: [
				"pagenation을 추가하여 사용자가 슬라이드를 쉽게 탐색할 수 있도록 했습니다.",
				"video API를 활용하여 관련 기능을 구현하였습니다.",
				"navigation의 다양한 디자인을 보여주었습니다.",
			],
			gitLink: "https://yuna-77.github.io/artcenter_nabi/"
		},
		{
			title: "Wconcept",
			subtit: "웹표준을 준수하여 만든 가장 기본형태의 Web Site",
			text: [
				"css로 구현하는 기본 동작인 호버 효과를 통해 사용자의 Interaction에 반응하는 효과를 보여주었습니다.",
				"navigation이 상태에 따라 다르게 변화 하도록 만들었습니다."
			],
			gitLink: "https://yuna-77.github.io"
		},
	],
	section4: {
		maintitle: "OPEN SOURCE",
		swiperslide: [
			{
				alt: "opensource",
				name: "open source3",
				tag: ["React","JavaScript Fetch API","Hook"],
				text: [
					"Fetch API를 활용하여 데이터를 로드하고 로딩 바 구현 할 수 있습니다.",
					"서버로부터 받은 응답을 JSON 형식으로 파싱하는것을 배웠습니다.",
					"이를 활용해 외부 API와의 데이터 통신을 효율적으로 구현할 수 있게 되었습니다."
				],
				gitLink: "https://yuna-77.github.io/open_source/"
			},
			{
				alt: "opensource",
				name: "open source4",
				tag: ["React","Redux","useSelector Library"],
				text: [
					"Redux를 사용하여 상태 관리를 수행하는 방법을 배웠습니다.",
					"이를 통해 컴포넌트 간의 데이터 흐름을 효율적으로 관리하고 웹 레이아웃에 필요한 데이터를 중앙 집중식으로 관리할 수 있습니다.",
				],
				gitLink: "https://yuna-77.github.io/open_source/"
			},
			{
				alt: "opensource",
				name: "open source9",
				tag: ["React","JavaScript map()","JavaScript Fetch API"],
				text: [
					"Fetch API를 활용하여 GNB의 HTML을 그리는 방법을 배웠습니다.",
					"map() 함수를 활용하여 리스트가 비어 있더라도 계속 실행되는 로직을 구현합니다.",
					"이를 활용하여 상품 목록,상품 옵션 처리,대시보드 위젯 목록,글 카데고리 및 태그 관리 등 다양한 형태도 구현 할 수 있습니다.",
				],
				gitLink: "https://yuna-77.github.io/open_source/"
			},
			{
				alt: "opensource",
				name: "open source10",
				tag: ["React","JavaScript Fetch API","Hook"],
				text: [
					"Axios Library를 활용하여 GNB의 HTML을 그리는 방법을 배웠습니다.",
					"Axios Library의 get() 메서드를 사용하여 외부 API로부터 데이터를 쉽게 요청하고 응답을 받아 처리하는 과정을 통해 비동기 작업을 보다 직관적으로 관리할 수 있습니다.",
				],
				gitLink: "https://yuna-77.github.io/open_source/"
			},
			{
				alt: "opensource",
				name: "open source13",
				tag: ["React","useState()","useEffect()"],
				text: [
					"useState()를 활용하여 반응형 해상도에 따라 다른 HTML을 그리는 방식을 구현 했습니다.",
					"현재 화면의 너비를 상태로 관리하고 이를 변경할 때마다 컴포넌트를 재렌더링하도록 설정했습니다.",
				],
				gitLink: "https://yuna-77.github.io/open_source/"
			},
			{
				alt: "opensource",
				name: "open source14",
				tag: ["React","Hook","JavaScript map()"],
				text: [
					"사용자 인터페이스에서 데이터의 개수를 조절할 수 있도록 '더보기' 버튼을 구현하여 원하는 만큼의 데이터를 쉽게 확인할 수 있도록 하였습니다.",
					"이 기능은 초기에는 제한된 항목만을 보여주고 버튼을 클릭 할 때 추가 데이커를 로드하는 방식인데",
					"이는 페이지의 로드 시간을 단축하고 사용자에게 더 나은 편리성을 제공합니다.",
				],
				gitLink: "https://yuna-77.github.io/open_source/"
			},
			{
				alt: "opensource",
				name: "open source15",
				tag: ["React","Hook","JavaScript sort()"],
				text: [
					"데이터를 정리하는 과정에서 JavaScript의 sort() 메서드를 활용하였습니다.",
					"이는 사용자가 작성한 피드백이나 리뷰를 날짜별로 정리,가격별로 정리 하는 기능을 구현 할 수 있게 해줍니다.",
				],
				gitLink: "https://yuna-77.github.io/open_source/"
			},
		]
	},
	footer: {
		info: {
			phone: "010-0000-0000",
			mail: "nyuu077@gamil.com",
			git: "https://github.com/yuna-77/yuna_PORTFLIO.git",
			notion: "https://powerful-tarp-c00.notion.site/FrontEnd-PORTFOLIO-1265229781a0807da468e05548081586?pvs=4"
		},
		sns: [
			{
				name: "linkedin",
				iconClass: "xi-linkedin",
				url: "https://www.linkedin.com'"
			},
			{
				name: "facebook",
				iconClass: "xi-facebook-official",
				url: "https://www.facebook.com"
			},
		]
	}
};

export default data;