import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import banner1 from "../../images/banner-1.png";
import banner2 from "../../images/banner-2.png";
import banner3 from "../../images/banner-3.png";
import banner4 from "../../images/banner-4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
	margin: 0 auto;
	width: 1200px;
	height: 300px;
`;

const StyledSlider = styled(Slider)`
	.slick-prev:before,
	.slick-next:before {
		color: #ff6701;
		margin: 0 auto;
	}

	.slick-slide {
		width: 100%;
		height: 300px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const banners = [banner1, banner2, banner3, banner4];

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
					{banners.map((banner, index) => (
						<div key={index}>
							<Image src={banner}></Image>
						</div>
					))}
				</StyledSlider>
			</Wrapper>
		);
	}
}
