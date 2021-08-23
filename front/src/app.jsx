import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Board from "../src/pages/Board";
import Detail from "../src/pages/Detail";
import MyPage from "./pages/MyPage";
import "antd/dist/antd.css";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/board" component={Board} />
			<Route exact path="/detail" component={Detail} />
			<Route exact path="/myPage" component={MyPage} />
		</Switch>
	);
};

export default App;
