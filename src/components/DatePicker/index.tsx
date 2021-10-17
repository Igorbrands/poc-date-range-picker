import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { Calendar } from "react-date-range";
import { useState } from "react";

export default function DatePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      <h2>Date Picker</h2>
      <Calendar date={currentDate} onChange={setCurrentDate} />
    </>
  );
}
