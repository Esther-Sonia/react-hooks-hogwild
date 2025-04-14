import React from "react";
import Nav from "./Nav";
import HogTile from './HogTile'
import HogFilter from './HogFilter';
import Sort from './Sort';

import hogs from "../porkers_data";

function App() {
	const [greasedOnly, setGreasedOnly] = React.useState(false);
    const [sortType, setSortType] = React.useState("");
	const [hiddenHogs, setHiddenHogs] = React.useState({});
	
    
	let filteredHogs = greasedOnly
	? hogs.filter((hog) => hog.greased)
		: hogs;

	if (sortType === "name") {
		filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortType === "weight") {
		filteredHogs.sort((a, b) => a.weight - b.weight);
	}

	const toggleHide = (hogName) => {
		setHiddenHogs((prevState) => ({
			...prevState,
			[hogName]: !prevState[hogName], 
		}));
	};



	return (
		<div className="App">
			<Nav />
			<div style={{ padding: "1rem" }}>
				<HogFilter greasedHogs={greasedOnly} setGreasedHogs={setGreasedOnly} />
				<Sort sortBy={sortType} setSortBy={setSortType} />
		</div>
		<div className="ui grid container">
				{filteredHogs.map((hog) => (
					<HogTile key={hog.name} hog={hog}
					isHidden={hiddenHogs[hog.name]}
					toggleHide={toggleHide} 
					 />
				))}
			</div>
		</div>
	);
	
}

export default App;
