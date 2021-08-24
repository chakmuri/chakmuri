import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "antd";
import Login from "./login/Login";

const Nav = styled.nav`
	width: 1200px;
	height: 80px;
	margin: 40px auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavLogo = styled.div`
	width: 122px;
	height: 32px;
	margin-left: 15px;
`;

const NavMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
`;

const NavLink = styled(Link)`
	display: flex;
	gap: 50px;
	color: black;

	&:hover {
		color: #ff6701;
	}
`;

const NavText = styled.div`
	font-family: Roboto;
	font-weight: 500;
	font-size: 20px;
`;

const NavIcon = styled.div`
	display: flex;
	gap: 34px;
`;

const NavProfile = styled.div`
	width: 48px;
	height: 48px;
	cursor: pointer;
`;

const StyledModal = styled(Modal)`
	display: flex;
	justify-content: center;

	.ant-modal-content {
		padding: 30px 55px;
		display: flex;
		align-items: center;
	}

	.ant-modal-body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 48px;
	}

	.ant-modal-footer {
		display: none;
	}
`;

const Title = styled.div`
	font-size: 26px;
	white-space: pre-wrap;
`;

const NavRegister = styled.div`
	width: 48px;
	height: 48px;
`;

const NavBar = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<Nav>
			<Link to="/">
				<NavLogo>
					<img src="assets/images/logo.png" alt="Logo" />
				</NavLogo>
			</Link>
			<NavMenu>
				<NavLink to="/board">
					<NavText>독서모임 찾기</NavText>
				</NavLink>
				<NavIcon>
					<NavProfile onClick={showModal}>
						<img src="assets/images/icons/profile.png" alt="Profile icon" />
					</NavProfile>
					<StyledModal visible={isModalVisible} onCancel={handleCancel}>
						<Title>
							지금 바로,
							<br />
							<strong>책무리</strong>에서 모여보세요!
						</Title>
						<Login onCancel={handleCancel} />
					</StyledModal>
					<NavRegister>
						<img src="assets/images/icons/add.png" alt="Add icon" />
					</NavRegister>
				</NavIcon>
			</NavMenu>
		</Nav>
	);
};

export default NavBar;
