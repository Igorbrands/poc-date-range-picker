import DatePicker from '../components/DatePicker';
import DateRangePicker from '../components/DateRangePicker';
import DateRangeHorizontal from '../components/DateRangeHorizontal';
import { Route, Switch } from 'react-router';

export default function Routes() {
  return (
    <Switch>
      <Route path="/date-picker" component={DatePicker} />
      <Route path="/date-range-picker" component={DateRangePicker} />
      <Route path="/date-range-horizontal" component={DateRangeHorizontal} />
    </Switch>
  );
}
