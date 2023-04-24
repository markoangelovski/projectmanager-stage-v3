import styled from "styled-components";

export const FormWrapper = styled.div`
  top: 0px;
  bottom: 0px;
  height: 100vh;
  min-width: 250px;
`;

export const FormPlaceholder = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const ErrorMsg = styled.div`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;
