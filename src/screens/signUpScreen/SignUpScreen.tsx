import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@styles';
import { SignUpForm } from '@components';

export const SignUpScreen = () => {
    return (
        <ScreenContainer>
            <Text>Sign Up</Text>
            <SignUpForm />
        </ScreenContainer>
    );
};
