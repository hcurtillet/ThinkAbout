import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import { colors } from '@styles';

type Props = {
    errorMessage: string;
};
export const ErrorMessage = (props: Props) => {
    const { errorMessage } = props;

    return (
        <ErrorMessageContainer>
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
        </ErrorMessageContainer>
    );
};

const ErrorMessageContainer = styled(View)`
    width: 100%;
    padding: 10px;
    border-width: 1px;
    border-color: ${colors.red};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

const ErrorMessageText = styled(Text)`
    color: ${colors.red};
`;
