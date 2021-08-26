import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Tag } from "antd";

const StyledTag = styled(Tag)`
	font-family: Roboto;
	font-weight: bold;
	font-size: 12px;
	color: #ffffff;
	padding: 3px 15px;
	border-radius: 30px;
`;

const SmallTag = ({ ...props }) => {
	return (
		<StyledTag color="#fea82f" className={classnames("tag", props.className)}>
			{props.children}
		</StyledTag>
	);
};

export default SmallTag;
