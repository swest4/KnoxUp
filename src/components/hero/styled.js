import styled from "@emotion/styled";

export default styled.section`
  /* min-height: 100vh; */
  text-align: center;

  h1 {
    font-size: 6em;
    margin-bottom: 0;
    letter-spacing: -0.04em;
  }
  h2 {
    font-style: italic;
    margin-top: 0.5em;
  }
  .buildingWrap {
    white-space: nowrap;
    margin-bottom: -1rem;

    figure {
      display: inline-block;
      width: 25%;
      margin: 0 0.5rem;
      position: relative;
      flex-grow: 1;

      &:nth-child(1) {
        width: 20%;
      }

      &:nth-child(2) {
        width: 35%;
      }

      &:nth-child(3) {
        width: 30%;
      }

      &:nth-child(4) {
        width: 17%;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
