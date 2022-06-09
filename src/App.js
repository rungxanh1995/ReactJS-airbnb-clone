import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardsData from "./apidata";

function apiDataToCardComponentFrom(/*Object[]*/ data) {
	return data.map(item =>
		<Card
			key={item.id}
			item={item}
		/>
	);
}

function App() {
	const dataElements = apiDataToCardComponentFrom(/*data*/ cardsData)
	return (
		<div>
			<Navbar/>
			<Hero/>
			<section className="cards-list">
				{dataElements}
			</section>
		</div>
	);
}

export default App;
