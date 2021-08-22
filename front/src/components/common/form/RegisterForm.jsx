import React, { useState } from "react";
import axios from "axios";
import { Form, Input, InputNumber, Row, Col, DatePicker } from "antd";
import styled from "styled-components";
import Button from "../Button";
import MapContainer from "./MapContainer";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const Wrapper = styled.div`
	width: 1200px;
	padding: 40px 100px;
	border: 1px solid black;
	margin: 0 auto;
`;

const StyledForm = styled(Form)`
	.ant-form-item-label > label {
		font-size: 18px;
		font-weight: bold;
	}

	.ant-form-item {
		margin-bottom: 14px;
	}

	.ant-input:focus,
	.ant-input-focused,
	.ant-input:hover,
	.ant-input-number:hover,
	.ant-picker:hover,
	.ant-picker-focused {
		border-color: #f98404;
		box-shadow: none;
	}
`;

const StyledInput = styled(Input)`
	font-family: Roboto;
	font-weight: bold;
	font-size: 16px;
	height: 48px;
	background-color: #f6f6f6;
	border: 1px solid #94989b;
	border-radius: 5px;
	}
`;

const StyledInputNumber = styled(InputNumber)`
	font-family: Roboto;
	font-weight: bold;
	font-size: 16px;
	width: 80px;
	height: 40px;
	background-color: #f6f6f6;
	border: 1px solid #94989b;
	border-radius: 5px;
`;

const PersonnelRow = styled.div`
	display: flex;
	gap: 5px;
`;

const StyledRangePicker = styled(RangePicker)`
	height: 48px;
	background-color: #f6f6f6;
	border: 1px solid #94989b;
	border-radius: 5px;

	.ant-picker-input > input {
		font-size: 16px;
		text-align: center;
	}

	.ant-picker-active-bar {
		background: #f98404;
	}
`;

const StyledTextArea = styled(TextArea)`
	width: 700px;
	background-color: #f6f6f6;
	border: 1px solid #94989b;
	border-radius: 5px;
`;

const AddIcon = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Tag = styled.div`
	padding: 10px 20px;
	font-size: 16px;
	color: #f98404;
	background-color: #ffffff;
	border: 1px solid #f98404;
	border-radius: 30px;
	text-align: center;
	letter-spacing: 2px;
`;

const TagContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const PreviewImage = styled.div`
	width: 263px;
	height: 263px;
	border: 1px solid black;
	border-radius: 50%;
`;

const BookCover = styled.div`
	width: 180px;
	height: 225px;
	background-color: #c4c4c4;
`;

const ButtonRow = styled(Row)`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	gap: 88px;
`;

const MapWrapper = styled.div`
	width: 1000px;
	height: 250px;
	margin-top: 40px;
`;

// styled-components 재사용 문제
const FilledButton = styled(Button)`
	& {
		color: #ffffff;
		background-color: #f98404;
		border: none;
		border-radius: 6px;
		outline: none;
	}
`;

const UnFilledButton = styled(Button)`
	& {
		color: #f98404;
		background-color: #ffffff;
		border: 2px solid #f98404;
		border-radius: 6px;
	}
`;

const SearchButton = styled(FilledButton)`
	& {
		type: button;
	}
`;

const RegisterForm = () => {
	const [inputText, setInputText] = useState("");
	const [spot, setSpot] = useState("");
	// const [imgFile, setImgFile] = useState(null);
	// const [preview, setPreview] = useState(null);

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const getAddress = (e) => {
		e.preventDefault();
		setSpot(inputText);
		setInputText("");
		console.log(spot);
	};

	// const handleImgChange = (e) => {
	// 	// setImgFile(e.target.files[0]);
	// 	console.log("image file: ", e.target.files[0]);
	// };

	// const handleImgUpload = () => {
	// 	const formData = new FormData();
	// 	formData.append("upload_image", imgFile);
	// 	console.log("formData: ", formData);

	// const config = {
	// 	headers: {
	// 		"content-type": "multipart/form-data",
	// 	},
	// };

	// axios.post("", formData, config);
	// };

	const sendData = async (values) => {
		const startDate = values.date[0]._d.toISOString().substring(0, 10);
		const endDate = values.date[1]._d.toISOString().substring(0, 10);
		const data = {
			title: values.title,
			contents: values.contents,
			startDate,
			endDate,
			minPersonnel: values.minPersonnel,
			maxPersonnel: values.maxPersonnel,
			description: values.description,
			bookDescription: values.bookDescription,
			tags: values.tags,
			book: values.book,
			imgUrl: values.imgUrl,
		};

		console.log(data);
		const res = await axios.post("/clubs", values);
		if (res.status === 200) console.log("Success");
		else console.log("Error");
	};

	const onFinish = async (values) => {
		console.log("form values: ", values);
		// sendData(values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed: ", errorInfo);
	};

	return (
		<Wrapper>
			<StyledForm
				name="registerForm"
				layout="vertical"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Row gutter={32}>
					<Col span={16}>
						<Form.Item
							label="이름"
							name="title"
							rules={[{ required: false, message: "모임 이름을 입력하세요." }]}
						>
							<StyledInput placeholder="이름" />
						</Form.Item>
						<Form.Item
							label="한 줄 소개"
							name="contents"
							rules={[
								{ required: false, message: "모임의 한 줄 소개를 입력하세요." },
							]}
						>
							<StyledInput placeholder="한 줄 소개" />
						</Form.Item>
						<Form.Item
							label="참여 인원"
							rules={[
								{
									required: false,
									message: "모임의 참여 인원을 입력하세요.",
								},
							]}
						>
							<Row>
								<Form.Item name="minPersonnel">
									<PersonnelRow>
										<StyledInputNumber min={2} defaultValue={2} />
										<span> 인 </span>
									</PersonnelRow>
								</Form.Item>
								<span> ~ </span>
								<Form.Item name="maxPersonnel">
									<PersonnelRow>
										<StyledInputNumber min={2} defaultValue={2} />
										<span> 인 </span>
									</PersonnelRow>
								</Form.Item>
							</Row>
						</Form.Item>
						<Form.Item
							label="진행 기간"
							name="date"
							rules={[
								{
									type: "array",
									message: "모임의 진행 기간을 입력하세요.",
								},
							]}
						>
							<StyledRangePicker />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							label="사진"
							name="imgUrl"
							rules={[
								{
									message: "모임의 사진을 업로드하세요.",
								},
							]}
							style={{ textAlign: "center" }}
						>
							<Row justify="center">
								<PreviewImage></PreviewImage>
							</Row>
							<input type="file" accept="image/*" />
							<Row justify="center">
								<FilledButton>이미지 업로드</FilledButton>
							</Row>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Form.Item
						label="태그"
						name="tags"
						rules={[
							{
								type: "string",
								required: false,
								message: "모임의 태그를 선택하세요.",
							},
						]}
					>
						<TagContainer>
							<Tag>소수정예</Tag>
							<Tag>온라인</Tag>
							<Tag>오프라인</Tag>
							<Tag>온・오프라인</Tag>
							<Tag>수도권</Tag>
							<Tag>지방</Tag>
							<Tag>친목</Tag>
							<Tag>독서 외 활동</Tag>
						</TagContainer>
					</Form.Item>
				</Row>
				<Row>
					<Col span={16}>
						<Form.Item label="선정도서" name="book">
							<Row gutter={[0, 16]}>
								<Col span={22}>
									<StyledInput placeholder="검색" />
								</Col>
								<Col span={2}>
									<AddIcon>
										<img src="assets/images/icons/add.png" alt="Add icon" />
									</AddIcon>
								</Col>
								<BookCover />
							</Row>
						</Form.Item>
						<Form.Item name="bookDescription">
							<Col>
								<div>도서 선정 이유 및 소개글</div>
								<StyledTextArea rows={10} />
							</Col>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={16}>
						<Form.Item
							label="상세설명"
							name="description"
							rules={[
								{ required: false, message: "모임의 상세설명을 입력하세요." },
							]}
						>
							<StyledTextArea rows={10} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={16}>
						<Form.Item label="위치">
							<Form.Item name="addressStreet">
								<StyledInput
									placeholder="도로명 주소"
									onChange={onChange}
									value={inputText}
								/>
							</Form.Item>
							<Form.Item name="addressDetail">
								<StyledInput placeholder="상세 주소" />
							</Form.Item>
						</Form.Item>
						<SearchButton onClick={getAddress}>주소 검색</SearchButton>
						<MapWrapper>
							<MapContainer searchSpot={spot} />
						</MapWrapper>
					</Col>
				</Row>
				<ButtonRow>
					<FilledButton>등록</FilledButton>
					<UnFilledButton>취소</UnFilledButton>
				</ButtonRow>
			</StyledForm>
		</Wrapper>
	);
};

export default RegisterForm;
