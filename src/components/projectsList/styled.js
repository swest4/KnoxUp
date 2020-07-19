import styled from '@emotion/styled';

export default styled.section`
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 7rem 2rem 5rem;
  }

  .inner {
    max-width: ${(props) => props.theme.maxWidth.container};
    margin: auto;
  }

  .wrapper {
    background: ${(props) => props.theme.color.white};
    border-radius: 5px;

    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      background: none;
    }
  }

  table {
    width: 100%;
    color: ${(props) => props.theme.color.navy};
    border-collapse: collapse;

    thead {
      td {
        font-weight: ${(props) => props.theme.fontWeight.bold};
        padding: 1rem;
        border-bottom: solid 1px rgba(0, 0, 0, 0.3);
        position: sticky;
        top: 0;
        background: ${(props) => props.theme.color.white};

        &:first-child {
          border-radius: 5px 0 0 0;
        }

        &:last-child {
          border-radius: 0 0 5px 0;
        }
      }
    }

    tbody {
      td {
        padding: 0.5rem 1rem;
        border-bottom: solid 1px rgba(0, 0, 0, 0.1);
        background: #f4f5f7;
      }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      table,
      thead,
      tbody,
      th,
      td,
      tr {
        display: block;
      }

      thead {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }

      tr {
        margin: 1rem 0;
        background: ${(props) => props.theme.color.white};
        border-radius: 5px;
        position: absolute;

        td {
          padding: 1rem;

          a {
            &::after {
              content: '';
              display: block;
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
  }
`;
