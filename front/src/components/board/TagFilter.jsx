import React from "react";
import styled from "styled-components";
import { customMedia } from "../common/GlobalStyles";

import Tag from "../common/Tag";

const TagFilter = (props) => {
	const tags = [
		"소수정예",
		"온라인",
		"오프라인",
		"온/오프라인",
		"수도권",
		"지방",
		"친목",
		"독서 외 활동",
	];

	const handleSelectTags = (e) => {
		let tagName = e.target.innerText;
		let index = props.selectedTags.indexOf(tagName);

		if (props.selectedTags.includes(tagName)) {
			props.selectedTags.splice(index, 1);
			props.setSelectedTags([...props.selectedTags]);
		} else {
			props.setSelectedTags([...props.selectedTags, tagName]);
		}
	};

	return (
		<>
			<TagContainer>
				{tags.map((tag, i) => (
					<BoardTag
						type="button"
						key={i}
						value={i}
						onClick={handleSelectTags}
						selected={props.selectedTags.includes(tag) ? true : false}
					>
						{tag}
					</BoardTag>
				))}
			</TagContainer>
		</>
	);
};

export default TagFilter;

const TagContainer = styled.div`
	width: 850px;
	margin: 80px auto;

	display: flex;
	flex-wrap: wrap;
	gap: 40px;

	${customMedia.lessThan("mobile")`
    width: 295px;
    margin: 40px auto;
    gap: 20px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 363px;
    margin: 40px auto;
    gap: 20px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 475px;
    margin: 40px auto;
    gap: 30px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 690px;
    margin: 60px auto;
    gap: 30px;
  `}
`;

const BoardTag = styled(Tag)`
	width: 182.5px;

	${customMedia.lessThan("mobile")`
    width: 137.5px;
  `}

  ${customMedia.between("mobile", "largeMobile")`
    width: 171.5px;
  `}

	${customMedia.between("largeMobile", "tablet")`
    width: 222.5px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 150px;
  `}
`;
