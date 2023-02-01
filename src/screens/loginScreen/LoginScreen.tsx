import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@styles';
import { LoginForm } from '@components';
import { useTranslation } from 'react-i18next';

export const LoginScreen = () => {
    const { t } = useTranslation();

    return (
        <ScreenContainer>
            <Text>{t('authentication.login')}</Text>
            <LoginForm />
        </ScreenContainer>
    );
};
