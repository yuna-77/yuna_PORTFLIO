import Header from './Component/Header';
import TapMoblie from './Component/TapMoblie';
import Section1 from './Component/Section1';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Section4 from './Component/Section4';
import Footer from './Component/Footer';
import UIScript from './Component/UIScript';
import './css/reset.css';
import './css/style.css';
import data from './data';

function App() {
	return (
		<>
			<div className="wrap">
				<Header/>
				<TapMoblie/>
				<Section1 props={data.section1}/>
				<Section2 props={data.section2}/>
				<Section3 props={data.section3} />
				<Section4 props={data.section4}/>
				<Footer props={data.footer}/>
			</div>
			<UIScript />
		</>
	);
}

export default App