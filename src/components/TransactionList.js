import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import dayjs from "dayjs";

import Map from "./Map";
import Spinner from "./Spinner";
import TransactionDescriptionList from "./TransactionDescriptionList";

import { formatCurrency, formatTransactionType } from "../utils";

const OrderedList = styled.ol`
  border: 1px solid lightgrey;
`;

const InitialContent = styled.div`
  display: grid;
  grid-template-columns: 16fr 28fr 28fr 1fr;
  column-gap: 20px;
`;

const ExpandableContent = styled.div`
  display: ${props => (props.hidden ? "none" : "grid")};
  padding-top: 12px;
  overflow: hidden;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const NegativeResponse = styled.p`
  padding: 18px;
  font-size: 14px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 10vh;
`;

const ListItem = styled.li`
  border-bottom: 1px solid lightgrey;
  padding: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  @media (min-width: 599px) {
    padding: 18px;
  }
`;

const DescriptionText = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9em;
  font-weight: 500;

  @media (max-width: 599px) {
    font-size: 0.7em;
  }
`;

const Toggle = styled.p`
  font-family: "Courier New", Courier, monospace;
`;

const TransactionList = ({ entries, isFetchingData }) => {
  const [selectedEntry, setSelectedEntry] = useState();

  useEffect(() => {
    setSelectedEntry(null);
  }, [entries]);

  if (isFetchingData === true) {
    return <Spinner size="8" margin="96px auto" useColor />;
  }

  if (entries.length < 1) {
    return (
      <NegativeResponse>
        Nenhuma transação encontrada pro período selecionado.
      </NegativeResponse>
    );
  }

  return (
    <Container>
      <OrderedList>
        {entries.map(entry => {
          return (
            <ListItem
              key={entry.id}
              onClick={() => {
                if (selectedEntry === entry.id) {
                  setSelectedEntry(null);
                } else {
                  setSelectedEntry(entry.id);
                }
              }}
            >
              <InitialContent>
                <DescriptionText>
                  {dayjs(entry.createdAt).format("DD/MM/YYYY, HH:mm")}
                </DescriptionText>
                <DescriptionText>
                  {formatTransactionType(entry.operationType)}
                </DescriptionText>
                <DescriptionText>
                  {formatCurrency(entry.amount)}
                </DescriptionText>
                <Toggle>{selectedEntry !== entry.id ? "+" : "-"}</Toggle>
              </InitialContent>
              <ExpandableContent hidden={selectedEntry !== entry.id}>
                <TransactionDescriptionList entry={entry} />
                <Map
                  latitude={entry.otherInfo.userLatitude}
                  longitude={entry.otherInfo.userLongitude}
                />
              </ExpandableContent>
            </ListItem>
          );
        })}
      </OrderedList>
    </Container>
  );
};

TransactionList.propTypes = {
  entries: PropTypes.array.isRequired
};

export default TransactionList;
