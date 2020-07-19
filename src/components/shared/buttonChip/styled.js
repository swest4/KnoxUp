import styled from "@emotion/styled";

export default styled.button`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.type.p};
  background: ${(props) => props.theme.gradients.b2p90};
  background-position: cover;
  background-repeat: no-repeat;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
  padding: 0.3em 1em;
  text-decoration: none;
  color: white;
  border: 0px solid transparent;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    background: ${(props) => props.theme.gradients.b2p45};
    color: ${(props) => props.theme.color.navy};
  }
`;
