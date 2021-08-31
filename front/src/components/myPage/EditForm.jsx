import React, { useState } from "react";
import axios from "axios";
import { Form, Input, InputNumber, Row, Col, DatePicker, message } from "antd";
import styled from "styled-components";
import moment from "moment";

import MapContainer from "../common/MapContainer";
import Button from "../common/Button";
import Tag from "../common/Tag";

const EditForm = ({ ...props }) => {
	const [editForm] = Form.useForm();
	const [inputText, setInputText] = useState("");
	const [streetAddress, setStreetAddress] = useState(
		props.myClub.addressStreet
	);
	const [detailAddress, setDetailAddress] = useState(
		props.myClub.addressDetail
	);
	const [imgFile, setImgFile] = useState(props.myClub.imgUrl);
	const [preview, setPreview] = useState(props.myClub.imgUrl);
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [selectedTags, setSelectedTags] = useState(
		props.myClub.tags ? props.myClub.tags.split(", ") : []
	);
	const userId = localStorage.getItem("user_id");
	const fullAddress = streetAddress + " " + detailAddress;
	const tags = [
		"온라인",
		"오프라인",
		"온/오프라인",
		"수도권",
		"지방",
		"친목",
		"독서 외 활동",
	];

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const getStreetAddress = () => {
		setStreetAddress(inputText);
		setInputText("");
	};

	const getDetailAddress = () => {
		setDetailAddress(inputText);
		setInputText("");
	};

	const getFullAdress = (e) => {
		getStreetAddress();
		getDetailAddress();
	};

	const handleImgChange = (e) => {
		let file = e.target.files[0];
		let reader = new FileReader();

		reader.onloadend = () => {
			setImgFile(file);
			setPreview(reader.result);
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleSelectTags = (e) => {
		let tagName = e.target.innerText;
		let index = selectedTags.indexOf(tagName);

		if (selectedTags.includes(tagName)) {
			selectedTags.splice(index, 1);
			setSelectedTags([...selectedTags]);
		} else if (selectedTags.length === 3) {
			selectedTags.splice(index, 1);
			message.error("태그는 최대 3개까지 선택 가능합니다!");
		} else {
			setSelectedTags([...selectedTags, tagName]);
		}
	};

	const sendData = async (values) => {
		setStartDate(values.date[0]._d.toISOString().substring(0, 10));
		setEndDate(values.date[1]._d.toISOString().substring(0, 10));
		const sendTags = selectedTags.join(", ");
		const formData = new FormData();
		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};

		if (!values.minPersonnel || !values.maxPersonnel) {
			message.error("참여인원을 입력해주세요.");
			return;
		}

		if (!imgFile) {
			message.error("사진을 등록해주세요.");
			return;
		}

		if (!sendTags) {
			message.error("태그를 선택해주세요.");
			return;
		}

		formData.append("title", values.title);
		formData.append("contents", values.contents);
		formData.append("startDate", startDate);
		formData.append("endDate", endDate);
		formData.append("minPersonnel", values.minPersonnel);
		formData.append("maxPersonnel", values.maxPersonnel);
		formData.append("tags", sendTags);
		formData.append("bookTitle", values.bookTitle);
		formData.append("author", values.author);
		formData.append("publisher", values.publisher);
		formData.append(
			"publishedAt",
			values.publishedAt === 0 ? "미정" : values.publishedAt
		);
		formData.append("bookDescription", values.bookDescription);
		formData.append("description", values.description);
		formData.append("addressStreet", values.addressStreet);
		formData.append("addressDetail", values.addressDetail);

		if (props.myClub.imgUrl !== imgFile) {
			formData.append("img", imgFile);
		} else {
			formData.append("img", props.myClub.imgUrl);
		}

		try {
			const res = await axios.put(`/clubs/users/${userId}`, formData, config);

			if (res.status === 200)
				message.success("독서모임이 성공적으로 수정되었습니다!");
			else message.error("독서모임 수정에 실패했습니다.");
		} catch (err) {
			console.log(err);
		}
	};

	const onFinish = async (values) => {
		sendData(values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed: ", errorInfo);
	};

	return (
		<Wrapper>
			<StyledForm
				form={editForm}
				name="editForm"
				layout="vertical"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Row gutter={32}>
					<Col span={16}>
						<Form.Item
							initialValue={props.myClub.title}
							label="이름"
							name="title"
							rules={[{ required: true, message: "모임 이름을 입력하세요." }]}
						>
							<StyledInput placeholder="이름" />
						</Form.Item>
						<Form.Item
							initialValue={props.myClub.contents}
							label="한 줄 소개"
							name="contents"
							rules={[
								{ required: true, message: "모임의 한 줄 소개를 입력하세요." },
							]}
						>
							<StyledInput placeholder="한 줄 소개" />
						</Form.Item>
						<Form.Item
							label="참여 인원"
							rules={[
								{
									required: true,
									message: "모임의 참여 인원을 입력하세요.",
								},
							]}
						>
							<Row>
								<PersonnelRow>
									<Form.Item
										initialValue={props.myClub.minPersonnel}
										name="minPersonnel"
									>
										<StyledInputNumber min={2} placeholder={2} />
									</Form.Item>
									<span> 인 </span>
								</PersonnelRow>
								<span> ~ </span>
								<PersonnelRow>
									<Form.Item
										initialValue={props.myClub.maxPersonnel}
										name="maxPersonnel"
									>
										<StyledInputNumber min={2} placeholder={2} />
									</Form.Item>
									<span> 인 </span>
								</PersonnelRow>
							</Row>
						</Form.Item>
						<Form.Item
							initialValue={[
								moment(props.myClub.startDate),
								moment(props.myClub.endDate),
							]}
							label="진행 기간"
							name="date"
							rules={[
								{
									type: "array",
									required: "true",
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
							name="img"
							rules={[
								{ required: false, message: "모임의 사진을 업로드하세요." },
							]}
							style={{ textAlign: "center" }}
						>
							<Row gutter={[0, 24]} justify="center">
								{!preview ? (
									<PreviewImage
										src="https://placehold.co/263x263"
										alt="Preview image"
									></PreviewImage>
								) : (
									<PreviewImage
										src={preview}
										alt="Preview image"
									></PreviewImage>
								)}
								<input
									type="file"
									accept="image/*"
									onChange={handleImgChange}
								/>
							</Row>
						</Form.Item>
					</Col>
				</Row>
				<TagRow>
					<Form.Item
						label="태그 (최대 3개까지 선택 가능)"
						name="tags"
						rules={[
							{
								type: "array",
								message: "모임의 태그를 선택하세요.",
							},
						]}
					>
						<TagContainer>
							{tags.map((tag, i) => (
								<Tag
									type="button"
									key={i}
									value={i}
									onClick={handleSelectTags}
									selected={selectedTags.includes(tag) ? true : false}
								>
									{tag}
								</Tag>
							))}
						</TagContainer>
					</Form.Item>
				</TagRow>
				<TitleRow>선정도서</TitleRow>
				<Col span={16}>
					<Form.Item
						initialValue={props.myClub.bookTitle}
						label="도서명"
						name="bookTitle"
						rules={[{ required: true, message: "도서명을 입력하세요." }]}
					>
						<StyledInput placeholder="도서명" />
					</Form.Item>
				</Col>
				<Col span={16}>
					<Form.Item
						initialValue={props.myClub.author}
						label="작가명"
						name="author"
						rules={[{ required: true, message: "작가명을 입력하세요." }]}
					>
						<StyledInput placeholder="작가명" />
					</Form.Item>
				</Col>
				<Col span={16}>
					<Form.Item
						initialValue={
							props.myClub.publisher === undefined ? "" : props.myClub.publisher
						}
						label="출판사"
						name="publisher"
					>
						<StyledInput placeholder="작가명" />
					</Form.Item>
				</Col>
				<Col span={16}>
					<Form.Item
						initialValue={props.myClub.publishedAt}
						label="출판연도"
						name="publishedAt"
					>
						<StyledInputNumber placeholder={1900} />
					</Form.Item>
				</Col>
				<Col span={16}>
					<Form.Item
						initialValue={props.myClub.bookDescription}
						label="도서 선정 이유 및 소개글"
						name="bookDescription"
						rules={[
							{
								required: true,
								message: "도서 선정 이유 및 소개글을 입력하세요.",
							},
						]}
					>
						<StyledTextArea
							rows={10}
							placeholder={"도서를 선정한 이유 및 소개글을 작성해주세요."}
						/>
					</Form.Item>
				</Col>

				<Row>
					<Col span={16}>
						<Form.Item
							initialValue={props.myClub.description}
							label="상세설명"
							name="description"
							rules={[
								{ required: true, message: "모임의 상세설명을 입력하세요." },
							]}
						>
							<StyledTextArea
								rows={10}
								placeholder={
									"모임의 소개글이나 공지사항 등 상세한 설명을 작성해주세요."
								}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={16}>
						<Form.Item label="위치">
							<Form.Item
								name="addressStreet"
								initialValue={
									props.myClub.addressStreet === undefined
										? ""
										: props.myClub.addressStreet
								}
							>
								<StyledInput
									placeholder="도로명 주소"
									onChange={onChange}
									value={inputText}
								/>
							</Form.Item>
							<Form.Item
								name="addressDetail"
								initialValue={
									props.myClub.addressDetail === undefined
										? ""
										: props.myClub.addressDetail
								}
							>
								<StyledInput placeholder="상세 주소" />
							</Form.Item>
						</Form.Item>
						<FilledBtn type="button" onClick={getFullAdress}>
							주소 검색
						</FilledBtn>
						<MapWrapper>
							<MapContainer searchSpot={fullAddress} />
						</MapWrapper>
					</Col>
				</Row>
				<ButtonRow>
					<FilledBtn>수정</FilledBtn>
				</ButtonRow>
			</StyledForm>
		</Wrapper>
	);
};

export default EditForm;

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const Wrapper = styled.section`
	width: 1200px;
	padding: 40px 100px;
	margin: 0 auto;
	border: 1.5px solid #c4c4c4;
	border-radius: 5px;
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

const TitleRow = styled.div`
	font-family: Roboto;
	font-weight: bold;
	font-size: 20px;
	margin: 20px 0;
`;

const TagRow = styled(Row)`
	margin-top: 20px;
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
	font-size: 16px;
	width: 700px;
	background-color: #f6f6f6;
	border: 1px solid #94989b;
	border-radius: 5px;
`;

const TagContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const PreviewImage = styled.img`
	width: 263px;
	height: 263px;
	border: none;
	border-radius: 50%;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 40px 0;
`;

const MapWrapper = styled.div`
	width: 1000px;
	height: 250px;
	margin-top: 40px;
`;

const FilledBtn = styled(Button)`
	& {
		color: #ffffff;
		background-color: #ff6701;
		border: none;
		border-radius: 6px;
		outline: none;
	}
`;
