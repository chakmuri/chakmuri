import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
	desktop: "1201px",
	tablet: "769px",
	largeMobile: "486px",
	mobile: "376px",
});

const GlobalStyles = createGlobalStyle`
  html, body{
    height: 100%;
  }

  body{
    font-family: Roboto;

    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
