import styled from '@emotion/styled';

export default styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  border: solid 10px ${(props) => props.theme.color.purple};
  box-sizing: border-box;

  .children {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
