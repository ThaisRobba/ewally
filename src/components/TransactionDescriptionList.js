import React from "react";
import styled from "styled-components";

const formatDescription = cupom => {
  let str = cupom.replace(/@/g, "\n");
  let lines = str.split("\n");

  return lines;
};

const DescriptionText = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 10px;
  padding: 0 4px;
  text-align: center;
  color: #333;

  @media (max-width: 599px) {
    font-size: 0.7em;
  }
`;

const Container = styled.div`
  @media (max-width: 599px) {
    margin-bottom: 12px;
  }
`;

const TransactionDescriptionList = ({ entry }) => {
  let cupom = entry.otherInfo.cupom;

  if (cupom === undefined) {
    return <div />;
  }

  return (
    <Container>
      {formatDescription(cupom).map((line, i) => {
        return <DescriptionText key={i}>{line}</DescriptionText>;
      })}
    </Container>
  );
};

export default TransactionDescriptionList;
