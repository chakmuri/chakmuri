import React, { useState } from "react";
// import axios from "axios";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import styled from "styled-components";
import dotenv from "dotenv";
dotenv.config();

const GoogleIcon = styled.span`
	position: absolute;
	left: 14px;
`;

const GoogleLoginButton = styled.button`
	width: 280px;
	height: 40px;
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
	background-color: #db4437;
	border: none;
	border-radius: 5px;
	outline: none;
	text-align: center;
	cursor: pointer;

	position: relative;
`;

const Login = (props) => {
	// const [loginStatus, setLoginStatus] = useState(false);
	console.log(props);

	const onSuccess = (response) => {
		console.log("Login Sucess: ", response.profileObj);
		props.onCancel();
		// const {
		// 	profileObj: { googleId, email, name, imageUrl },
		// } = response;

		// try {
		// 	const res = await axios.get(
		// 		`${process.env.REACT_APP_SERVER_URL}/users/${googleId}`
		// 	);

		// 	if (!res.id) {
		// 		const user = {
		// 			id: googleId,
		// 			name,
		// 			email,
		// 			img_url: imageUrl,
		// 		};

		// 		await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, user);
		// setLoginStatus(true);
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }
	};

	// const logout = () => {
	// 	setLoginStatus(false);
	// };

	const onFailure = (response) => {
		console.log("Login Failed: ", response);
	};

	return (
		<>
			<GoogleLogin
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				render={(renderProps) => (
					<GoogleLoginButton
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
					>
						<GoogleIcon>
							<img src="assets/images/icons/google.png" alt="Google icon" />
						</GoogleIcon>
						구글로 로그인
					</GoogleLoginButton>
				)}
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
			/>
			{/* <GoogleLogout
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				render={(renderProps) => {
					<GoogleLoginButton
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
					>
						로그아웃
					</GoogleLoginButton>;
				}}
				onLogoutSuccess={logout}
			/> */}
		</>
	);
};

export default Login;
