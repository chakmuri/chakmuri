import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import "antd/dist/antd.css";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
};

export default App;
