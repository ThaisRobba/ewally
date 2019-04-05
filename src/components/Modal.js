import React from "react";
import styled from "styled-components";

const ModalWindow = styled.div`
  width: 185px;
  background-color: white;
  box-shadow: #00000033 4px 4px 4px;
  border-radius: 4px;
  padding: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -240px;
  margin-left: -108px;
`;

const Modal = props => {
  return <ModalWindow>{props.children}</ModalWindow>;
};

export default Modal;
