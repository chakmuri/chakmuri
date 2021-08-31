import styled from "styled-components";

const Footer = () => {
	return (
		<StyledFooter>
			<Copyright>Copyright &copy; 2021 책무리</Copyright>
			<Text>본 사이트는 포트폴리오 용도로 제작된 사이트입니다.</Text>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.div`
	width: 100%;
	height: 80px;
	background-color: #f6f6f6;
	display: flex;
	gap: 600px;
	justify-content: center;
	align-items: center;
`;

const Copyright = styled.div`
	font-family: Roboto;
	font-size: 22px;
	font-weight: 500;
`;

const Text = styled.div`
	font-family: Roboto;
	font-size: 20px;
`;
