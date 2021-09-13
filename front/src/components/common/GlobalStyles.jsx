import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
	desktop: "1201px",
	tablet: "769px",
	largeMobile: "484px",
	mobile: "376px",
});

const GlobalStyles = createGlobalStyle`
  body{
    font-family: Roboto;
  }
`;

export default GlobalStyles;
