import styled from "styled-components";

export const EditTaskIcon = styled.div`
  cursor: pointer;
  // float: right;

  svg {
    color: ${props => {
      if (props.done) {
        return "green";
      } else {
        return "red";
      }
    }};
  }
`;
