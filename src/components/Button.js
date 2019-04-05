import styled from "styled-components";

const Button = styled.button`
  height: 22px;
  background-color: white;
  border: 1px solid #00a1b6;
  border-radius: 2px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: ${props => props.margin || "0px"};
  color: #17626b;
  &:hover {
    background-color: #1296a7;
    cursor: pointer;
    color: black;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;

export default Button;
