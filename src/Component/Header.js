import Nav from "./Nav";
import Home from "./Home";
import data from "../data";

function Header() {
	return (  
		<header id="header">
			<div className="hd-wrap">
				<Logo/>
				<nav id="gnb">
					<Nav props={data.nav}/>
				</nav>
			</div>
			<Home props={data.home}/>
		</header>
	);
}

function Logo(){
	return(
		<h1 className="logo"><a href="">Portfolio</a></h1>
	);
}

export default Header;