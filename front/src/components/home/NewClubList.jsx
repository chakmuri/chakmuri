import React from "react";
import { Row, Col } from "antd";
import MainClubCard from "./MainClubCard";

const NewList = () => {
	return (
		<Row gutter={24}>
			<Col span={6}>
				<MainClubCard />
			</Col>
			<Col span={6}>
				<MainClubCard />
			</Col>
			<Col span={6}>
				<MainClubCard />
			</Col>
			<Col span={6}>
				<MainClubCard />
			</Col>
		</Row>
	);
};

export default NewList;
