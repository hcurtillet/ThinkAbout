import React from 'react';
import {
    Text,
    TextInput as ReactTextInput,
    TextInputProps,
    View,
} from 'react-native';
import styled from 'styled-components';

import { colors } from '@styles';

type Props = TextInputProps & {
    label: string;
};
export const TextInput = (props: Props) => {
    const { label } = props;
    return (
        <View>
            <MyText>{label}</MyText>
            <MyTextInput {...props} />
        </View>
    );
};

const MyText = styled(Text)`
    color: ${colors.blue};
`;
const MyTextInput = styled(ReactTextInput)`
    border: 1px solid ${colors.blue};
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    margin-top: 5px;
`;
