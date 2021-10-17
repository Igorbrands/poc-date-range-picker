import { useState } from "react";
import {
  DateRange,
  DateRangeProps,
  OnDateRangeChangeProps,
  Range,
} from "react-date-range";

export default function DateRangeHorizontal({ ...props }: DateRangeProps) {
  const [dates, setDates] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selectedDates",
    },
  ]);

  function onChangeRanges(values: any) {
    setDates([values.selectedDates]);
  }

  return (
    <>
      <h2>Date Range Horizontal</h2>

      <DateRange
        direction="horizontal"
        months={2}
        showSelectionPreview={true}
        editableDateInputs={true}
        onChange={(value: OnDateRangeChangeProps) => onChangeRanges(value)}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        {...props}
      />
    </>
  );
}
