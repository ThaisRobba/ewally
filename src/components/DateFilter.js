import React, { useState } from "react";

const DateFilter = ({ start, setStart, end, setEnd, max }) => {
  const [currentStart, setCurrentStart] = useState(start);
  const [currentEnd, setCurrentEnd] = useState(end);

  const handleSubmit = e => {
    e.preventDefault();
    setStart(currentStart);
    setEnd(currentEnd);
  };

  return (
    <div>
      <span>Extrato:</span>
      <form onSubmit={handleSubmit}>
        De:
        <input
          type="date"
          name="start"
          value={currentStart}
          onChange={e => setCurrentStart(e.target.value)}
          max={max}
        />
        Até:
        <input
          type="date"
          name="end"
          value={currentEnd}
          onChange={e => setCurrentEnd(e.target.value)}
          max={max}
        />
        <input type="submit" value="Pesquisar" />
      </form>
    </div>
  );
};

export default DateFilter;
