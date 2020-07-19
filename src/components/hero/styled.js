import styled from '@emotion/styled';

export default styled.section`
  /* min-height: 100vh; */
  text-align: center;
  background: url('./knoxmap.png');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 6em;
    margin-bottom: 0;
    letter-spacing: -0.04em;
    color: ${(props) => props.theme.color.purple};
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease-in-out;
    .active& {
      opacity: 1;
      transform: none;
    }
  }
  h2 {
    font-style: italic;
    margin-top: 0.5em;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease-in-out;
    transition-delay: 0.2s;
    .active& {
      opacity: 1;
      transform: none;
    }
  }
  .buildingWrap {
    white-space: nowrap;
    margin-bottom: -1rem;
    overflow-x: hidden;
    margin-top: -14%;

    figure {
      display: inline-block;
      width: 25%;
      margin: 0 0.5rem;
      position: relative;
      flex-grow: 1;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      transition-delay: 0.4s;

      .active& {
        opacity: 1;
      }

      &:nth-child(1) {
        width: 20%;
      }

      &:nth-child(2) {
        width: 35%;
        transition-delay: 0.8s;
      }

      &:nth-child(3) {
        width: 30%;
        transition-delay: 1s;
      }

      &:nth-child(4) {
        width: 17%;
        transition-delay: 0.6s;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
