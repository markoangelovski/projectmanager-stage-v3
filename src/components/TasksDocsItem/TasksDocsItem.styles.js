import styled from "styled-components";

export const TableRowFix = styled.tr`
  > td {
    border-top: 0;
  }

  > td:nth-child(3) {
    cursor: pointer;
  }

  > td:last-child {
    display: flex;
    justify-content: space-between;
  }

  > td:last-child svg {
    opacity: 0.5;
    cursor: pointer;
  }

  span {
    cursor: pointer;
    font-weight: 600;
  }
`;

export const EventRowCell = styled.td`
  white-space: nowrap;
`;

export const EventRowCellDueDate = styled.td`
  white-space: nowrap;
  display: flex;

  > span {
    background: ${props =>
      props.hsl >= 0 ? `hsl(${props.hsl}, 100%, 50%, 0.5)` : `inherit`};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
