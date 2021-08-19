import React from "react";
import {
	Form,
	Input,
	InputNumber,
	Row,
	Col,
	DatePicker,
	// Upload,
	// message,
} from "antd";
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
	margin-bottom: 10px;

	&:last-of-type {
		margin-bottom: 0;
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
	width: 70px;
	height: 40px;
	color: #ffffff;
	background-color: #f98404;
	border-radius: 6px;
`;

const UnFilledButton = styled(Button)`
	width: 70px;
	height: 40px;
	background-color: #ffffff;
	border: 2px solid #f98404;
	border-radius: 6px;
`;

const RegisterForm = () => {
	const onFinish = (values) => {
		console.log("form values: ", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed: ", errorInfo);
	};

	// const props = {
	// 	name: "file",
	// 	action: "https://api.cloudinary.com/v1_1/diwyt7nzg/image/upload",
	// 	headers: {
	// 		authorization: "authorization-text",
	// 	},
	// 	onChange(info) {
	// 		if (info.file.status !== "uploading") {
	// 			console.log(info.file, info.fileList);
	// 		}
	// 		if (info.file.status === "done") {
	// 			message.success(`${info.file.name} file uploaded successfully`);
	// 		} else if (info.file.status === "error") {
	// 			message.error(`${info.file.name} file upload failed.`);
	// 		}
	// 	},
	// };

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
							name="name"
							rules={[{ required: true, message: "모임 이름을 입력하세요." }]}
						>
							<StyledInput placeholder="이름" />
						</Form.Item>
						<Form.Item
							label="한 줄 소개"
							name="intro"
							rules={[
								{ required: true, message: "모임의 한 줄 소개를 입력하세요." },
							]}
						>
							<StyledInput placeholder="한 줄 소개" />
						</Form.Item>
						<Form.Item
							label="참여 인원"
							name="members"
							rules={[
								{ required: true, message: "모임의 참여 인원을 입력하세요." },
							]}
						>
							<StyledInputNumber min={2} defaultValue={2} /> <span>인</span>{" "}
							<span>~</span>
							<StyledInputNumber min={2} defaultValue={2} /> <span>인</span>
						</Form.Item>
						<Form.Item
							label="진행 기간"
							name="date"
							rules={[
								{ required: true, message: "모임의 진행 기간을 입력하세요." },
							]}
						>
							<div>
								<StyledRangePicker />
							</div>
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item
							label="사진"
							name="photo"
							rules={[
								{
									required: true,
									message: "모임의 사진을 업로드하세요.",
								},
							]}
							style={{ textAlign: "center" }}
						>
							<Row justify="center">
								<PreviewImage></PreviewImage>
							</Row>
							<Row justify="center" align="center">
								{/* <Upload {...props}>
								</Upload> */}
								<FilledButton>이미지 업로드</FilledButton>
							</Row>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Form.Item
						label="태그"
						name="tags"
						rules={[{ required: true, message: "모임의 태그를 선택하세요." }]}
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
								<Col>
									<div>도서 선정 이유 및 소개글</div>
									<StyledTextArea rows={10} />
								</Col>
							</Row>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={16}>
						<Form.Item
							label="상세설명"
							name="description"
							rules={[
								{ required: true, message: "모임의 상세설명을 입력하세요." },
							]}
						>
							<StyledTextArea rows={10} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={16}>
						<Form.Item label="위치">
							<StyledInput placeholder="도로명 주소" />
							<StyledInput placeholder="상세 주소" />
							<MapWrapper>
								<MapContainer />
							</MapWrapper>
						</Form.Item>
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
