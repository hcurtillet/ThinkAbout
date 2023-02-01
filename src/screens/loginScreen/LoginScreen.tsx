import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@styles';
import { LoginForm } from '@components';

export const LoginScreen = () => {
    return (
        <ScreenContainer>
            <Text>Login</Text>
            <LoginForm />
        </ScreenContainer>
    );
};
