import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
const Container = styled.div`
  padding: 16px;
`;

const DateInput = styled.input`
  border-radius: 2px;
  border: 1px solid grey;
  font-family: Verdana;
  font-weight: 500;
`;

const DateLabel = styled.p`
  text-align: right;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 1px;
`;

const DateTitle = styled.p`
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${props => props.color || "black"};
  font-weight: 600;
  padding-top: 4px;
`;

const DateForm = styled.form`
  display: grid;
  grid-template-columns: 12fr 1fr 5fr 1fr 5fr 4fr;
  column-gap: 12px;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
`;

const DateFilter = ({ start, setStart, end, setEnd, max }) => {
  const [currentStart, setCurrentStart] = useState(start);
  const [currentEnd, setCurrentEnd] = useState(end);

  const handleSubmit = e => {
    e.preventDefault();
    setStart(currentStart);
    setEnd(currentEnd);
  };

  return (
    <Container>
      <DateForm onSubmit={handleSubmit}>
        <DateTitle>Extrato por período</DateTitle>
        <DateLabel>De:</DateLabel>
        <DateInput
          type="date"
          name="start"
          value={currentStart}
          onChange={e => setCurrentStart(e.target.value)}
          max={max}
        />
        <DateLabel>Até:</DateLabel>
        <DateInput
          type="date"
          name="end"
          value={currentEnd}
          onChange={e => setCurrentEnd(e.target.value)}
          max={max}
        />
        <Button type="submit">Pesquisar</Button>
      </DateForm>
    </Container>
  );
};

export default DateFilter;
