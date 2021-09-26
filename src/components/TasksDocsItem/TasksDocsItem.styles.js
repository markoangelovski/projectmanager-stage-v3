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
