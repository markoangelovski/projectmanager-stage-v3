import styled from "styled-components";

export const EditEventIcon = styled.div`
  cursor: pointer;

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
