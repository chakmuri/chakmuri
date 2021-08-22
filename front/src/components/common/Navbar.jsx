import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
	width: 1200px;
	height: 80px;
	margin: 40px auto;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.nav-menu {
		width: 400px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	nav-menu .board {
		margin-right: 50px;
	}

	.nav-icon .profile {
		margin-right: 32px;
	}
`;

const NavLogo = styled.div`
	width: 122px;
	height: 32px;
	margin-left: 15px;
`;

const NavMenu = styled.div`
	font-family: Roboto;
	font-weight: 500;
	font-size: 20px;
`;

const NavBar = () => {
	return (
		<Nav>
			<NavLogo>
				<img src="assets/images/logo.png" alt="Logo" />
			</NavLogo>
			<div className="nav-menu">
				<NavMenu className="board">보드</NavMenu>
				<NavMenu className="feed">피드</NavMenu>
				<div className="nav-icon">
					<img
						className="profile"
						src="assets/images/icons/profile.png"
						alt="Profile icon"
					/>
					<img
						className="add"
						src="assets/images/icons/add.png"
						alt="Add icon"
					/>
				</div>
			</div>
		</Nav>
	);
};

export default NavBar;
