import styled from "styled-components";
import { customMedia } from "../../GlobalStyles";

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
  
  ${customMedia.lessThan("mobile")`
    height: 40px;
    gap: 100px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    height: 40px;
    gap: 100px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    height: 60px;
    gap: 200px;
  `}

	${customMedia.between("tablet", "desktop")`
    height: 60px;
    gap: 400px;
  `}
`;

const Copyright = styled.div`
	font-size: 22px;
  font-weight: 500;
  
  ${customMedia.lessThan("mobile")`
    font-size: 10px;
    margin-left: 25px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 10px;
    margin-left: 25px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 18px;
  `}
`;

const Text = styled.div`
  font-size: 20px;
  
  ${customMedia.lessThan("mobile")`
    font-size: 10px;
    margin-right: 25px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    font-size: 10px;
    margin-right: 25px;
  `}

  ${customMedia.between("largeMobile", "tablet")`
    font-size: 14px;
  `}

	${customMedia.between("tablet", "desktop")`
    font-size: 16px;
  `}
`;
