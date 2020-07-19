import styled from '@emotion/styled';

export default styled.section`
  padding: 3rem 2rem 5rem;
  background: ${(props) => props.theme.color.navy};
  height: auto;

  .active& {
    transform: none;
  }

  .inner {
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: auto;
  }

  section {
    margin-bottom: 3rem;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    transition-delay: 1s;

    &.active {
      opacity: 1;
    }

    h3 {
      text-align: center;
      position: relative;
      font-weight: ${(props) => props.theme.fontWeight.regular};
      margin-bottom: 0;
    }
  }

  .columns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .column {
    flex-grow: 1;
    padding: 2rem;
    width: min-content;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .circle_progress {
      width: 300px;
      height: 300px;
    }

    h4 {
      font-size: ${(props) => props.theme.type.h1};
      margin: 0;
    }

    h6 {
      margin: 0;
    }
  }
`;
