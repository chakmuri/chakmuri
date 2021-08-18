import React from "react";
import GoogleLogin from "react-google-login";
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

	position: relative;
`;

const Login = () => {
	const onSuccess = (res) => {
		console.log("Login Sucess: ", res.profileObj);
	};

	const onFailure = (res) => {
		console.log("Login Failed: ", res);
	};

	return (
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
	);
};

export default Login;
