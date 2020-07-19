import styled from "@emotion/styled";

export default styled.main`
  @import "https://use.typekit.net/hsn7pfs.css";

  text-rendering: optimizeLegibility;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (2100 - 320)));
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }

  * {
    font-family: ${(props) => props.theme.font.primary};
  }

  .content {
    flex-grow: 1;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  li,
  label {
    line-height: ${(props) => props.theme.lineHeight.normal};
    letter-spacing: ${(props) => props.theme.letterSpacing.normal};
  }

  h1 {
    font-size: ${(props) => props.theme.type.h1};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
  }

  h2 {
    font-size: ${(props) => props.theme.type.h2};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  h3 {
    font-size: ${(props) => props.theme.type.h3};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }

  h4 {
    font-size: ${(props) => props.theme.type.h4};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }

  h5 {
    font-size: ${(props) => props.theme.type.h5};
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  h6 {
    font-size: ${(props) => props.theme.type.h6};
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  p {
    font-size: ${(props) => props.theme.type.p};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  a {
    color: ${(props) => props.theme.color.purple};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.color.blurple};
    }
  }

  li {
    font-size: ${(props) => props.theme.type.p};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  button {
    font-size: ${(props) => props.theme.type.p};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }
`;
