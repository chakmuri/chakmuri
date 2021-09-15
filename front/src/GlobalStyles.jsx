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
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body{
    font-family: Roboto;
  }

  #root{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;

export default GlobalStyles;
