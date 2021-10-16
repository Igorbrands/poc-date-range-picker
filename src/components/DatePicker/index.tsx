import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { Calendar } from 'react-date-range';

export default function DatePicker() {
  function handleSelect(date: Date) {
    console.log(date);
  }

  return (
    <>
      <h2>Date Picker</h2>
      <Calendar date={new Date()} onChange={handleSelect} />
    </>
  );
}
