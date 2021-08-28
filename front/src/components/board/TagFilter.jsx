import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Tag from "../common/Tag";
import { useEffect } from "react";

const TagContainer = styled.div`
	width: 850px;
	margin: 80px auto;

	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const BoardTag = styled(Tag)`
	width: 200px;
`;

const Search = (props) => {
	const tags = [
		"소수정예",
		"온라인",
		"오프라인",
		"온・오프라인",
		"수도권",
		"지방",
		"친목",
		"독서 외 활동",
	];

	const handleSelectTags = (e) => {
		let tagName = e.target.innerText;
		let index = props.selectedTags.indexOf(tagName);

		if (props.selectedTags.includes(tagName)) {
			props.setSelectedTags(props.selectedTags.splice(index, 1));
		} else {
			props.setSelectedTags([...props.selectedTags, tagName]);
		}
	};

	useEffect(() => console.log(props.selectedTags), [props.selectedTags]);

	return (
		<>
			<TagContainer>
				<Row gutter={[32, 32]}>
					{tags.map((tag, i) => (
						<Col span={6}>
							<BoardTag
								type="button"
								key={i}
								value={i}
								onClick={handleSelectTags}
								selected={props.selectedTags.includes(tag) ? true : false}
							>
								{tag}
							</BoardTag>
						</Col>
					))}
				</Row>
			</TagContainer>
		</>
	);
};

export default Search;
