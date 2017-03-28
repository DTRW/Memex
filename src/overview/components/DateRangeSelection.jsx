import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import datePickerStyles from 'react-datepicker/dist/react-datepicker-cssmodules.css'

import styles from './DateRangeSelection.css'


const DateRangeSelection = ({
    startDate, endDate,
    onStartDateChange, onEndDateChange,
}) => (
    <div className={styles.dateRangeSelection}>
        <DatePicker
            className={styles.datePicker}
            dateFormat="DD-MM-YYYY"
            placeholderText="after.."
            isClearable={true}
            selected={startDate && moment(startDate)}
            selectsStart
            startDate={moment(startDate || 0)}
            endDate={moment(endDate)}
            maxDate={moment()}
            onChange={date => onStartDateChange(
                date ? date.valueOf() : undefined,
            )}
        />
        <DatePicker
            className={styles.datePicker}
            dateFormat="DD-MM-YYYY"
            placeholderText="before.."
            isClearable={true}
            selected={endDate && moment(endDate)}
            selectsEnd
            startDate={moment(startDate || 0)}
            endDate={moment(endDate)}
            maxDate={moment()}
            onChange={date => onEndDateChange(
                date ? date.endOf('day').valueOf() : undefined,
            )}
        />
    </div>
)

export default DateRangeSelection
