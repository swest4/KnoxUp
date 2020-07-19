import styled from '@emotion/styled';

export default styled.header`
  position: sticky;
  bottom: 0;
  background: ${(props) => props.theme.gradients.n2n};
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: column;
  }

  .logo {
    width: 40px;
    height: 40px;
    margin: 0;
  }

  ul {
    width: 100%;
    list-style: none;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: ${(props) => props.theme.maxWidth.menu};

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      flex-direction: column;
    }

    > li {
      > ul {
        background: rgba(255, 255, 255, 0.1);
        display: none;
        margin: 0 -0.5rem;
        padding: 0.25rem 0;
        width: calc(100% + 1rem);

        a {
          color: ${(props) => props.theme.color.purple};
          padding: 0 0.5rem;

          &.active {
            background: ${(props) => props.theme.color.purple};
            border-radius: 5px;
          }
        }

        @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
          display: inline-block;
        }
      }
    }
  }

  > ul {
    padding: 0 2rem;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      padding: 2rem 0;
    }
  }

  li {
    padding: 0.25rem 0.5rem;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.4s ease-in-out;

      &.active {
        color: ${(props) => props.theme.color.white};
      }
    }

    p {
      margin: 0.25rem 0 0.5rem;
      font-weight: ${(props) => props.theme.fontWeight.regular};
    }
  }

  svg {
    height: 30px;
    width: 30px;
    margin: 5px 0;
  }
`;
