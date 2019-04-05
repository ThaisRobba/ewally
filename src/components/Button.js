import styled from "styled-components";

const Button = styled.button`
  height: 22px;
  background-color: #00a1b6;
  border: none;
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: ${props => props.margin || "0px"};

  &:hover {
    background-color: #1296a7;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

export default Button;
