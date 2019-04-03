import React from "react";

const DateFilter = (start, setStart, end, setEnd) => {
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
        />
        Até:
        <input
          type="date"
          name="end"
          value={end}
          onChange={e => setEnd(e.target.value)}
        />
        <input type="submit" value="Pesquisar" />
      </form>
    </div>
  );
};

export default DateFilter;
