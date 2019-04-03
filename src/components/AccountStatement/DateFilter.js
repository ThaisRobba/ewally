import React from "react";

const DateFilter = ({ start, setStart, end, setEnd, max, setSearchFlag }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setSearchFlag(true);
  };
  return (
    <div>
      <span>Extrato:</span>
      <form>
        De:
        <input
          type="date"
          name="start"
          value={start}
          onChange={e => setStart(e.target.value)}
          max={max}
        />
        Até:
        <input
          type="date"
          name="end"
          value={end}
          onChange={e => setEnd(e.target.value)}
          max={max}
        />
        <input type="submit" value="Pesquisar" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default DateFilter;
