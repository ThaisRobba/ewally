import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-ewally.png";

const Image = styled.img`
  width: 100%;
`;

const Logo = () => <Image src={logo} alt="Logo Ewally" />;

export default Logo;
