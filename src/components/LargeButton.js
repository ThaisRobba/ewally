import styled from "styled-components";

const LargeButton = styled.button`
  width: 100%;
  background-color: #870b4e;
  border: none;
  border-radius: 4px;
  font-family: Verdana, sans-serif;
  font-weight: 600;
  color: white;
  padding: 8px;
  margin: ${props => props.margin || "0px"};

  &:hover {
    background-color: #741548;
    cursor: pointer;
  }
`;

export default LargeButton;
