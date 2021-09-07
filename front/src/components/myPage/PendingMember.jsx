import styled from "styled-components";

const PendingMember = (props) => {
	return (
		<PendingMemberBar>
			<PendingMemberProfileIcon>
				<img src={props.userImgUrl} alt="Profile icon" />
			</PendingMemberProfileIcon>
			<PendingMemberUsername>{props.username}</PendingMemberUsername>
			<PendingMemberEmail>{props.userEmail}</PendingMemberEmail>
			<PendingMemberBtn>승인</PendingMemberBtn>
			<PendingMemberBtn>거절</PendingMemberBtn>
		</PendingMemberBar>
	);
};

export default PendingMember;

const PendingMemberBar = styled.div`
	width: 1200px;
	height: 80px;
	border: 1.5px solid #c4c4c4;
	border-radius: 5px;
	display: flex;
	align-items: center;
`;

const PendingMemberProfileIcon = styled.div`
	width: 48px;
	height: 48px;
	margin-left: 65px;
	margin-right: 15px;
`;

const PendingMemberUsername = styled.div`
	font-family: Roboto;
	font-size: 20px;
	margin-right: 55px;
`;
const PendingMemberEmail = styled.div`
	font-family: Roboto;
	font-size: 20px;
	flex: 1;
`;

const PendingMemberBtn = styled.button`
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
	background-color: #ff6701;
	border: none;
	border-radius: 6px;
	padding: 10px 20px;
	margin-right: 55px;
	cursor: pointer;
`;
