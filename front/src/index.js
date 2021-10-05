import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import store from "./store";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
