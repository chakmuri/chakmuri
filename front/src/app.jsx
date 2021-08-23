import React from "react";
import Main from "../src/pages/Home";
import Board from "../src/pages/Board";
import Detail from "../src/pages/Detail";
import { Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/board" component={Board} />
			<Route exact path="/detail" component={Detail} />
		</Switch>
	);
};

export default App;
