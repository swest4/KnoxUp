import styled from '@emotion/styled';

export default styled.section`
  padding: 7rem 2rem 5rem;
  background: ${(props) => props.theme.gradients.n2p};
  flex-grow: 1;

  .inner {
    width: 100%;
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: auto;
    color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      flex-direction: row;
    }
  }

  .card {
    margin: 1rem 0;
    background: ${(props) => props.theme.color.white};
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme.color.navy};
    padding: 2rem 1rem;
    width: 100%;
    box-sizing: border-box;
    flex-grow: 1;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      width: 33%;
      margin: 0 1rem;
    }

    h4 {
      margin: 0 0 1rem 0;
    }

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        margin: 0 0.5rem;

        svg {
          width: 25px;
          height: 25px;
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
