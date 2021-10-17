import { addDays } from "date-fns";
import { useState } from "react";
import {
  DateRange,
  DateRangeProps,
  OnDateRangeChangeProps,
  Range,
} from "react-date-range";

export default function DateRangePicker({ ...props }: DateRangeProps) {
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
      <h2>Date Range Picker</h2>
      <DateRange
        editableDateInputs={false}
        showMonthAndYearPickers={false}
        showPreview
        showDateDisplay={false}
        showSelectionPreview={false}
        onChange={(values: OnDateRangeChangeProps) => onChangeRanges(values)}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        dragSelectionEnabled={false}
        minDate={addDays(new Date(), -1)}
        direction="vertical"
        scroll={{ enabled: true }}
        calendars={2}
        months={2}
        {...props}
      />
    </>
  );
}
