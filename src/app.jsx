import React from "react";
import Board from "../src/pages/board";
import { Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Board} />
		</Switch>
	);
};

export default App;
