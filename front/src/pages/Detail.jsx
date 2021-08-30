import React from "react";
import NavBar from "../components/common/navBar/NavBar";
import Main from "../components/detail/Main";
import Footer from "../components/common/Footer";

const Detail = (props) => {
	return (
		<>
			<NavBar />
			<Main {...props} />
			<Footer />
		</>
	);
};

export default Detail;
