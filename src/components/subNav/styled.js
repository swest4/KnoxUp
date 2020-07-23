import styled from '@emotion/styled';

export default styled.nav`
  background: ${(props) => props.theme.color.blurple};
  padding: 0.5em 1em;
  position: sticky;
  top: 0;
  z-index: 100;
  opacity: 0;
  transition: all 0.4s ease-in-out;

  .active& {
    opacity: 1;
  }

  ul {
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  li {
    margin: 0 0.5rem;
    opacity: 0;
    transition: all 0.4s ease-in-out;

    .active& {
      opacity: 1;
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    font-size: ${(props) => props.theme.type.label};
    display: inline-block;
    padding: 0.5em 1.5em;
    text-decoration: none;
    color: ${(props) => props.theme.color.white};

    &:active,
    &:focus,
    &:hover {
      color: ${(props) => props.theme.color.white};
    }
  }

  .indicator {
    border-radius: ${(props) => props.theme.borderRadius.subNavLink};
    background: rgba(0, 0, 0, 0.2);
    height: calc(100% - 1rem);
    position: absolute;
    top: 0.5rem;
    transition: all 0.4s ease-in-out;
    z-index: -1;
  }
`;
