import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
    size: number | undefined;
    color: string | undefined;
}
export const homeIcon = (props: Props) => (
    <Icon name="home" size={props.size ?? 30} color={props.color ?? '#000'} />
);
export const profileIcon = (props: Props) => (
    <Icon
        name="profile"
        size={props.size ?? 30}
        color={props.color ?? '#000'}
    />
);
