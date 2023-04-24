import styled from "styled-components";

export const TableRowFix = styled.tr`
  > td {
    border-top: 0;
    vertical-align: middle;
  }

  span {
    margin-top: 5px;
  }

  svg {
    opacity: 0.5;
    color: #007bff;
  }
`;

export const EventRowCell = styled.td`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;
