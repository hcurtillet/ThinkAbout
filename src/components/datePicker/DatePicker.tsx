import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Button } from '@components';
import { View } from 'react-native';
import { formatDate } from '@utils';
type Props = {
    onChangeDate: (date: string) => void;
    title: string;
    date: string;
};
export const CustomDatePicker = (props: Props) => {
    const { date, onChangeDate, title } = props;

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const displayedTitle = date ? formatDate(date) : title;

    const dateTime = date ? new Date(date) : new Date();

    return (
        <View>
            <Button
                onPress={() => setDatePickerVisible(true)}
                title={displayedTitle}
            />
            <DatePicker
                modal
                open={isDatePickerVisible}
                date={dateTime}
                onConfirm={date => {
                    setDatePickerVisible(false);
                    onChangeDate(date.toISOString());
                }}
                onCancel={() => {
                    setDatePickerVisible(false);
                }}
            />
        </View>
    );
};
