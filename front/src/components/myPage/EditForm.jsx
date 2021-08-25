import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Input, InputNumber, Row, Col, DatePicker } from "antd";
import styled from "styled-components";
import Button from "../common/Button";
import MapContainer from "../common/MapContainer";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const Wrapper = styled.div`
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
	cursor: pointer;

	&:hover {
		color: #ffffff;
		background-color: #f98404;
	}
`;

// const SelectedTag = styled(Tag)`
// 	color: #ffffff;
// 	background-color: #f98404;
// `;

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

const EditForm = (props) => {
	const [inputText, setInputText] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [detailAddress, setDetailAddress] = useState("");
	const [imgFile, setImgFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [club, setClub] = useState({});
	// const clubTags = [];
	// const [tags, setTags] = useState([]);
	// const [isSelected, setIsSelected] = useState(false);

	const userId = localStorage.getItem("userId");
	const fullAddress = streetAddress + detailAddress;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`clubs/user/${userId}`);
				setClub(res.data);
				setPreview(res.data.imgUrl);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [userId]);

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

	// const handleTags = (e) => {
	// 	console.log(e.target.className);
	// 	let text = e.target.textContent;
	// 	const index = clubTags.indexOf(text);
	// 	if (!isSelected) {
	// 		clubTags.splice(index, 1);
	// 		setIsSelected(true);
	// 		setTags(clubTags);
	// 	} else {
	// 		clubTags.push(text);
	// 		setIsSelected(false);
	// 		setTags(clubTags);
	// 	}
	// };

	const sendData = async (values) => {
		const startDate = values.date[0]._d.toISOString().substring(0, 10);
		const endDate = values.date[1]._d.toISOString().substring(0, 10);
		const formData = new FormData();
		formData.append("upload_image", imgFile);

		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};

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
			books: values.books,
			addressStreet: values.addressStreet,
			addressDetail: values.addressDetail,
		};

		console.log(data);

		const res = await axios.patch(`clubs/${club.id}`, data);
		if (res.status === 200) console.log("Success");
		else console.log("Error");
	};

	const onFinish = async (values) => {
		console.log("form values: ", values);
		sendData(values);
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
							initialValue={club.title}
							label="이름"
							name="title"
							rules={[{ required: true, message: "모임 이름을 입력하세요." }]}
						>
							<StyledInput placeholder="이름" />
						</Form.Item>
						<Form.Item
							initialValue={club.contents}
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
										name="minPersonnel"
										initialValue={club.minPersonnel}
									>
										<StyledInputNumber min={2} placeholder={2} />
									</Form.Item>
									<span> 인 </span>
								</PersonnelRow>
								<span> ~ </span>
								<PersonnelRow>
									<Form.Item
										name="maxPersonnel"
										initialValue={club.maxPersonnel}
									>
										<StyledInputNumber min={2} placeholder={2} />
									</Form.Item>
									<span> 인 </span>
								</PersonnelRow>
							</Row>
						</Form.Item>
						<Form.Item
							initialValue={[club.startDate, club.endDate]}
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
						<Form.Item label="선정도서" name="books">
							<Row gutter={[0, 16]}>
								<Col span={22}>
									<StyledInput placeholder="검색" />
								</Col>
								<Col span={2}>
									<AddIcon>
										<img src="assets/images/icons/add.png" alt="Add icon" />
									</AddIcon>
								</Col>
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
							initialValue={club.description}
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
							<Form.Item name="addressStreet" initialValue={club.addressStreet}>
								<StyledInput
									placeholder="도로명 주소"
									onChange={onChange}
									value={inputText}
								/>
							</Form.Item>
							<Form.Item name="addressDetail" initialValue={club.addressDetail}>
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
