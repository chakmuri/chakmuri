import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import styled from "styled-components";
import dotenv from "dotenv";

import google from "../../../../images/icons/google.png";

dotenv.config();

const Login = ({ ...props }) => {
	const onSuccess = async (response) => {
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

				await axios.get(`users/${user.id}`);

				localStorage.setItem("user_id", user.id);
				localStorage.setItem("user_image", user.imgUrl);
				props.onCancel();
				window.location.reload();
			} else {
				localStorage.setItem("user_id", res.data.id);
				localStorage.setItem("user_image", res.data.imgUrl);
				props.onCancel();
				window.location.reload();
			}
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
							<img src={google} alt="Google icon" />
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
