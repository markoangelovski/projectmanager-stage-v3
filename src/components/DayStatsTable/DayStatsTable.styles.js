import styled from "styled-components";

export const TableRowFix = styled.tr`
  > td {
    border-top: 0;
  }

  > td:first-child {
    cursor: pointer;
  }
`;

export const EventRowCell = styled.td`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;

  svg {
    opacity: 0.5;
    cursor: pointer;
    color: ${props => {
      if (typeof props.booked !== "boolean") {
        return "#007bff";
      }
      if (props.booked) {
        return "green";
      } else {
        return "red";
      }
    }};
  }
`;
