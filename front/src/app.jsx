import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Board from "../src/pages/Board";
import Detail from "../src/pages/Detail";
import MyPage from "./pages/MyPage";
import "antd/dist/antd.css";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
	return (
		<ScrollToTop>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/board" component={Board} />
				<Route exact path="/detail:id" component={Detail} />
				<Route exact path="/myPage" component={MyPage} />
			</Switch>
		</ScrollToTop>
	);
};

export default App;
