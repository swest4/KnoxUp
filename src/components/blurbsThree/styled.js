import styled from '@emotion/styled';

export default styled.section`
  padding: 7rem 2rem;
  background: ${(props) => props.theme.color.white};

  .inner {
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: auto;
    color: ${(props) => props.theme.color.navy};
    display: flex;
    flex-direction: column;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      flex-direction: row;
    }
  }

  .column {
    text-align: center;
    margin: 1rem 0;
    opacity: 0;
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;

    &:first-of-type {
      margin-top: 0;
      transition-delay: 0.2s;
    }

    &:nth-of-type(2) {
      transition-delay: 0.4s;
    }

    &:last-child {
      margin-bottom: 0;
      transition-delay: 0.6s;
    }

    .active& {
      opacity: 1;
      transform: none;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      margin: 0 1rem;

      &:first-of-type {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    svg {
      width: 50px;
      height: 50px;
      color: ${(props) => props.theme.color.purple};
    }
  }
`;
