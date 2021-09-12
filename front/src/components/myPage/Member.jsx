import styled from "styled-components";

import Button from "../common/Button";
import profile from "../../images/icons/profile.png";

const Member = (props) => {
	return (
		<MemberBar>
			<MemberProfileIcon>
				{props.myMember.imgUrl ? (
					<img src={props.myMember.imgUrl} alt="Profile icon" />
				) : (
					<img src={profile} alt="Profile icon" />
				)}
			</MemberProfileIcon>
			<MemberUsername>{props.myMember.name}</MemberUsername>
			<MemberEmail>{props.myMember.email}</MemberEmail>
			<MemberBtn onClick={() => props.handleMemberDelete(props.myMember.id)}>
				내보내기
			</MemberBtn>
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

	img {
		width: 100%;
		heigt: 100%;
	}
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
