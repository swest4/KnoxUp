import styled from '@emotion/styled';

export default styled.section`
  padding: 3rem 2rem;
  overflow: auto;
  position: relative;

  .inner {
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: auto;
  }

  .timeline_year {
    display: flex;
    flex-direction: column;
    padding: 0 0 3rem;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      flex-direction: row;
    }

    > h4 {
      margin: 0;
      font-size: ${(props) => props.theme.type.h1};
      color: ${(props) => props.theme.color.purple};
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      padding: 0 0 0 2rem;
    }
  }

  li {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.4s ease-in-out;
    transition-delay: 0.2s;
    padding: 0 0 2rem;
    display: block;

    &.active {
      opacity: 1;
      transform: none;
    }

    a {
      width: 100%;
      color: ${(props) => props.theme.color.white};
      display: inline-block;
      transition: all 0.4s ease-in-out;

      &:hover,
      &:active,
      &:focus {
        color: ${(props) => props.theme.color.white};
        transform: translateX(10px);
      }
    }

    h2 {
      margin: 0;
    }

    h4 {
      margin: 0;
      opacity: 0.8;
      font-weight: ${(props) => props.theme.fontWeight.medium};
    }
  }
`;
