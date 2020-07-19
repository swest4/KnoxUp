import styled from '@emotion/styled';

export default styled.section`
  padding: 5rem 2rem;
  background: ${(props) => props.theme.gradients.n2p45};

  .inner {
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: auto;
    color: ${(props) => props.theme.color.white};
    opacity: 0;
    transition: all 0.4s ease-in-out;
    text-align: ${(props) => props.align};

    .active& {
      opacity: 1;
    }
  }
`;
