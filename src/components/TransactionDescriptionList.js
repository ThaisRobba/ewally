import React from "react";
import styled from "styled-components";

import { formatStatus } from "../utils";

const formatDescription = entry => {
  let items = ["ID: " + entry.id];

  if (entry.status) {
    items.push("\nStatus: " + formatStatus(entry.status));
  }

  if (entry.otherInfo && entry.otherInfo.otherAccountName) {
    items.push("\nID de Terceiro: " + entry.otherInfo.otherAccountName);
  }

  return items;
};

const DescriptionText = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9em;
  font-weight: 500;
  color: #333;

  @media (max-width: 599px) {
    font-size: 0.7em;
  }
`;

const UnorderedList = styled.ul`
  @media (max-width: 599px) {
    margin-bottom: 8px;
  }
`;
const TransactionDescriptionList = ({ entry }) => {
  return (
    <UnorderedList>
      {formatDescription(entry).map(line => (
        <li key={entry.id}>
          <DescriptionText>{line}</DescriptionText>
        </li>
      ))}
    </UnorderedList>
  );
};

export default TransactionDescriptionList;
