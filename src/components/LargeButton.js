import styled from "styled-components";

const LargeButton = styled.button`
  width: 100%;
  height: 32px;
  background-color: #870b4e;
  border: none;
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  color: white;
  padding: 8px;
  margin: ${props => props.margin || "0px"};

  &:hover {
    background-color: #741548;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

export default LargeButton;
