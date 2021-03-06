import React, { useState } from 'react';
import { View, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const DateTimePicker = () => {
    const [ date, setDate ] = useState(new Date());
    const [ mode, setMode ] = useState('date');
    const [ show, setShow ] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;

        setDate(currentDate);
        setShow(Platform.OS === 'ios' ? true : false);
    }

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    }

    const showDatePicker = () => {
        showMode('time');
    }

    return (
        <View>
          <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      );
}

export default DateTimePicker;