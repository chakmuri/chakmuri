import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { customMedia } from "../common/GlobalStyles";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../images/banner-1.png";
import banner2 from "../../images/banner-2.png";
import banner3 from "../../images/banner-3.png";
import banner4 from "../../images/banner-4.png";

export default class ImageSlider extends Component {
	render() {
		const settings = {
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
		};
		return (
			<Wrapper>
				<StyledSlider {...settings}>
					<Image src={banner1}></Image>
					<Link to="/board">
						<Image src={banner2}></Image>
					</Link>
					<Image src={banner3}></Image>
					<Image src={banner4}></Image>
				</StyledSlider>
			</Wrapper>
		);
	}
}

const Wrapper = styled.section`
	margin: 0 auto;
	width: 1200px;
  height: 300px;
  
  ${customMedia.lessThan("mobile")`
    display: none;
  `}

	${customMedia.between("mobile", "tablet")`
    width: 610px;
    height: 152.5px;
  `}

	${customMedia.between("tablet", "desktop")`
    width: 880px;
    height: 220px;
  `}

	
`;

const StyledSlider = styled(Slider)`
	.slick-prev:before,
	.slick-next:before {
		color: #ff6701;
		margin: 0 auto;
	}

	.slick-slider {
		width: 100%;
    height: 300px;

    
  ${customMedia.lessThan("mobile")`
    display: none;
  `}

  ${customMedia.between("mobile", "tablet")`
    height: 152.5px;
  `}

	${customMedia.lessThan("desktop")`
    height: 220px;
  `}

	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;
