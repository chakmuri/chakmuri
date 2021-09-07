import styled from "styled-components";

import Button from "../common/Button";

const Member = (props) => {
	return (
		<MemberBar>
			<MemberProfileIcon>
				<img src={props.userImgUrl} alt="Profile icon" />
			</MemberProfileIcon>
			<MemberUsername>{props.userName}</MemberUsername>
			<MemberEmail>{props.userEmail}</MemberEmail>
			<MemberBtn>내보내기</MemberBtn>
		</MemberBar>
	);
};

const MemberBar = styled.div`
	width: 1200px;
	height: 80px;
	border: 1.5px solid #c4c4c4;
	border-radius: 5px;

	display: flex;
	align-items: center;
`;

const MemberProfileIcon = styled.div`
	width: 48px;
	height: 48px;
	margin-left: 65px;
	margin-right: 15px;
`;

const MemberUsername = styled.div`
	font-family: Roboto;
	font-size: 20px;
	margin-right: 55px;
`;
const MemberEmail = styled.div`
	font-family: Roboto;
	font-size: 20px;
	flex: 1;
`;

const MemberBtn = styled(Button)`
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
	background-color: #ff6701;
	border: none;
	border-radius: 6px;
	margin-right: 55px;
`;

export default Member;
