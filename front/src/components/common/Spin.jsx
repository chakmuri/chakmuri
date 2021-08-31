import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CustomSpin = () => <StyledSpin indicator={antIcon} />;

export default CustomSpin;

const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

const StyledSpin = styled(Spin)`
	color: #fea82f;
`;
