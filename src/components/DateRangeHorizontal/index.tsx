import { useState } from 'react';
import DateRangePicker from '../DateRangePicker';
import { addDays } from 'date-fns';

export type RangeDateState = {
  startDate: Date | null;
  endDate: Date | null;
  key?: string;
};

export default function DateRangeHorizontal() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  return (
    <>
      <h2>Date Range</h2>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
      ;
    </>
  );
}
