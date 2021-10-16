import { useState } from 'react';
import { DateRange } from 'react-date-range';

export type RangeDateState = {
  startDate: Date | null;
  endDate: Date | null;
  key?: string;
};

export default function DateRangePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <>
      <h2>Date Range</h2>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </>
  );
}
