import styled from "@emotion/styled";

export default styled.a`
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  font-size: ${(props) => props.theme.type.p};
  text-decoration: none;
  text-decoration: none;
  border-radius: none;
  border: none;
  background-color: transparent;
  margin: 2em 0em;
  padding: 0.2em 0em;
  position: relative;
  transition: color 0.3s ease-in;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    transform: scaleX(1);
    background-color: ${(props) => props.theme.color.purple};
    transition: transform 0.5s cubic-bezier(0.6, -0.01, 0.11, 0.99);
    bottom: 0;
    right: 0;
    transform-origin: bottom right;
  }

  &:hover {
    &:after {
      transform: scaleX(0);
      background-color: ${(props) => props.theme.color.blurple};
    }
  }
`;
