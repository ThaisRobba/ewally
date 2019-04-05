import styled from "styled-components";

const Label = styled.label`
  width: 100%;
  margin-top: ${props => props.marginTop || "16px"};
  margin-bottom: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8em;
  color: #3f3f3f;
  display: inline-block;
`;

export default Label;
