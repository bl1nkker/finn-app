
import React, { useRef } from 'react';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

function Test() {
  const startValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
  const endValue = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15);
  const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 8);
  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth()+1, 20);

  return (
    <div>
      <DateRangePickerComponent placeholder="Enter Date Range"
      startDate={startValue}
      endDate={endValue}
      format="dd.MM.yy"
      onChange={(event) => console.log(event)}
      //Uncomment below code to show month range picker. Also comment the properties min, max, mindays and maxdays
      // start="Year"
      // depth="Year"
      >
          
      </DateRangePickerComponent>
    </div>
  );
}

export default Test;