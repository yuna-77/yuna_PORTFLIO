# PortFolio

안녕하세요.😀  \
배움에 대한 적극적인 마음과 자세로 발전해나가는 신입 웹퍼블리셔, 프론트엔더 조유나입니다.

저의 PortFolio ReadMe를 소개 합니다.

[🔗 PortFolio Link](https://yunaportfolio.vercel.app/)

  \
Hello! 😀  \
I am Jo Yuna. A passionate and proactive junior web publisher and front-end developer, committed to continuous learning and improvement.

Here is an introduction to my Portfolio ReadMe.


## 프로젝트 설명

이제껏 진행한 프로젝트를 보여주고 저의 프로필을 소개하는 포트폴리오 입니다.

HOME, ABOUT ME, SKILL, PROJECT, OPEN SOURCE, CONTACT(FOOTER)로 목록이 구성되어 있습니다.

각 항목에 대한

web, mobile 지원이 가능합니다.

  
## 사용 기능 소개
 모든 페이지를 PageList라는 배열로 만들어 주고 PageList 배열의 각 요소에 대해 **GSAP와 ScrollTrigger를 사용하여 스크롤 이벤트에 따라 애니메이션을 설정** 해주었습니다.  \
 각 섹션에 도달할때 애니메이션이 제어되어야 하므로 타임라인을 생성 하고 그 타임라인이 스크롤 위치에 따라 애니메이션을 제어할 수 있게 설정 해주었습니다.
 
### `HOME`
**`gsap.timeline` 을 사용하여 텍스트 애니메이션 효과**를 주었습니다.  \
3개의 텍스트가 동시에 실현되지만 딜레이가 걸리는 디자인이어서 `stagger` 를 걸어 순차적으로 애니메이션효과를 주었습니다.

### `ABOUT ME`
home에서 어두웠던 화면이 전환 되기에 `onEnter` 와 `onLeave` function을 걸어 들어오고 나갈때 "dark"를 주었습니다.  \
각 텍스트의 애니메이션이 상세하게 걸리는것을 의도했기때문에 위와는 달리, 각 텍스트 요소에 대해 별도의 fromTo 메소드를 사용하여 각각의 애니메이션 효과를 주었습니다.  \

### `SKILL`


### `PROJECT`


### `OPEN SOURCE`

### `CONTACT(FOOTER)`




