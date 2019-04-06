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
  height: 18px;

  /* @media (max-width: 599px) {
    margin-bottom: 16px;
  } */
`;

const DateLabel = styled.p`
  text-align: right;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9em;
  margin-top: 3px;
  margin-right: 4px;

  @media (max-width: 599px) {
    text-align: left;
  }
`;

const DateTitle = styled.p`
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${props => props.color || "black"};
  font-weight: 600;
  padding-top: 4px;
`;
const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 36px 112px;

  @media (max-width: 599px) {
    grid-template-columns: 10% 90%;
    margin-bottom: 16px;
  }
`;

const DateForm = styled.form`
  display: grid;

  @media (max-width: 599px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 600px) and (max-width: 849px) {
    grid-template-columns: 12fr 6fr 6fr 4fr;
    column-gap: 12px;
  }

  @media (min-width: 850px) {
    grid-template-columns: 12fr 6fr 6fr 4fr;
    column-gap: 12px;
  }

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
        <SubContainer>
          <DateLabel>De</DateLabel>
          <DateInput
            type="date"
            name="start"
            value={currentStart}
            onChange={e => setCurrentStart(e.target.value)}
            max={max}
          />
        </SubContainer>
        <SubContainer>
          <DateLabel>Até</DateLabel>
          <DateInput
            type="date"
            name="end"
            value={currentEnd}
            onChange={e => setCurrentEnd(e.target.value)}
            max={max}
          />
        </SubContainer>
        <Button type="submit">Pesquisar</Button>
      </DateForm>
    </Container>
  );
};

export default DateFilter;
