import styled from "styled-components";

export const EditEventIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 0 5px;

  svg {
    color: ${props => {
      if (props.booked) {
        return "green";
      } else {
        return "red";
      }
    }};
  }
`;
