import styled from "@emotion/styled";

export default styled.header`
  position: sticky;
  bottom: 0;
  background: ${(props) => props.theme.gradients.n2n};
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
`;
