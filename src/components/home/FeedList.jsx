import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import FeedCard from "./FeedCard";

const FeedList = () => {
	return (
		<Row gutter={24}>
			<Col span={8}>
				<FeedCard />
			</Col>
			<Col span={8}>
				<FeedCard />
			</Col>
			<Col span={8}>
				<FeedCard />
			</Col>
		</Row>
	);
};

export default FeedList;
