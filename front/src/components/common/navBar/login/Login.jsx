import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import google from "../../../../images/icons/google.png";
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
		const {
			profileObj: { googleId, email, name, imageUrl },
		} = response;

		console.log("google res ", response);

		try {
			const res = await axios.get(`/users/${googleId}`);

			console.log("login res: ", res.status);

			if (res.status === 204) {
				console.log("status code 204");
				const user = {
					id: googleId,
					name,
					email,
					imgUrl: imageUrl,
				};

				console.log(user.id);
				console.log(user.imgUrl);

				await axios.post("/users", user);
				await axios.get(`users/${user.id}`);

				localStorage.setItem("user_id", user.id);
				localStorage.setItem("user_image", user.imgUrl);
				props.onCancel();
			} else {
				localStorage.setItem("user_id", res.data.id);
				localStorage.setItem("user_image", res.data.imgUrl);
				props.onCancel();
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
