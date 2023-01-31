import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { colors } from '@styles';

type Props = {
    onPress: () => void;
    title: string;
};
export const Button = (props: Props) => {
    const { onPress, title } = props;
    return (
        <MyButton onPress={onPress}>
            <Text>{title}</Text>
        </MyButton>
    );
};

const MyButton = styled(TouchableOpacity)`
    background-color: ${colors.blue};
    min-width: 100px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    align-self: center;
    align-items: center;
    justify-content: center;
`;
