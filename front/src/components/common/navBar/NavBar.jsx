import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal, Menu, Dropdown } from "antd";
import Login from "./login/Login";
import RegisterForm from "./register/RegisterForm";
import { useEffect } from "react";

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

	img {
		width: 100%;
		height: 100%;
	}
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
	cursor: pointer;
`;

const StyledDropdownMenu = styled(Menu)`
	.ant-dropdown-menu-item,
	.ant-dropdown-menu-submenu-title {
		font-family: Roboto;
		font-size: 16px;
		padding: 10px 20px;
		text-align: center;
	}
`;

const NavBar = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const userId = localStorage.getItem("user_id");
	const userImg = localStorage.getItem("user_image");
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [userImage, setUserImage] = useState(null);

	useEffect(() => {
		if (userId) {
			setLoggedIn(true);
			setUserImage(userImg);
		}
	}, [userId, userImg]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleLogout = () => {
		localStorage.removeItem("user_id");
		localStorage.removeItem("user_image");
		setLoggedIn(false);
		setUserImage(null);
	};

	const dropdownMenu = (
		<StyledDropdownMenu>
			<Menu.Item key="1">
				<Link to="/myPage">마이페이지</Link>
			</Menu.Item>
			<Menu.Item key="2" onClick={handleLogout}>
				로그아웃
			</Menu.Item>
		</StyledDropdownMenu>
	);

	return (
		<>
			{!isLoggedIn ? (
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
								<Login onCancel={handleCancel} setLoggedIn={setLoggedIn} />
							</StyledModal>
						</NavIcon>
					</NavMenu>
				</Nav>
			) : (
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
							<Dropdown overlay={dropdownMenu} placement="bottomCenter">
								<NavProfile>
									<img src={userImage} alt="User profile" />
								</NavProfile>
							</Dropdown>
							<NavRegister onClick={showModal}>
								<img src="assets/images/icons/add.png" alt="Add icon" />
							</NavRegister>
							<StyledModal visible={isModalVisible} onCancel={handleCancel}>
								<RegisterForm onCancel={handleCancel} />
							</StyledModal>
						</NavIcon>
					</NavMenu>
				</Nav>
			)}
		</>
	);
};

export default NavBar;
