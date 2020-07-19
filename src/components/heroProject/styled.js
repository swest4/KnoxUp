import styled from "@emotion/styled";

export default styled.section`
  padding: 7rem 2rem 5rem;
  background: ${(props) => props.theme.gradients.b2p90};
  position: sticky;
  top: 0;
  z-index: -1;
  opacity: 0;
  transition: all 0.4s ease-in-out;

  .active& {
    opacity: 1;
  }

  .inner {
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: auto;
    color: ${(props) => props.theme.color.white};

    h1,
    h2,
    h3 {
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.4s ease-in-out;
    }

    h1 {
      margin: 0;
      line-height: 1em;
      transition-delay: 0.4s;

      .active& {
        opacity: 1;
        transform: none;
      }
    }

    h2 {
      line-height: 1em;
      margin: 0;
      font-weight: ${(props) => props.theme.fontWeight.medium};
      transition-delay: 0.6s;

      .active& {
        opacity: 0.8;
        transform: none;
      }
    }

    h3 {
      transition-delay: 0.6s;

      .active& {
        opacity: 1;
        transform: none;
      }
    }
  }
`;
