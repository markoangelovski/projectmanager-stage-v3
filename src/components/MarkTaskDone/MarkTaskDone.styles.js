import styled from "styled-components";

export const EditTaskIcon = styled.div`
  cursor: pointer;
  float: right;

  svg {
    opacity: 0.5;
    color: ${props => {
      if (props.done) {
        return "green";
      } else {
        return "red";
      }
    }};
  }
`;
