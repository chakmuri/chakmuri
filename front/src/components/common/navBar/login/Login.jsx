import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
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

const Login = ({ ...props }) => {
	const history = useHistory();

	const onSuccess = async (response) => {
		// console.log("Login Sucess: ", response.profileObj);
		const {
			profileObj: { googleId, email, name, imageUrl },
		} = response;

		try {
			const res = await axios.get(`/users/${googleId}`);

			if (res.status === 204) {
				const user = {
					id: googleId,
					name,
					email,
					imgUrl: imageUrl,
				};

				await axios.post("/users", user);
			}
			console.log(res.data);
			localStorage.setItem("userId", res.data.id);
			props.getLoginStatus(true);
			props.getUserImage(res.data.imgUrl);
			props.onCancel();
			history.push("/");

			return res;
		} catch (err) {
			console.log(err);
		}
	};

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
		</>
	);
};

export default Login;
