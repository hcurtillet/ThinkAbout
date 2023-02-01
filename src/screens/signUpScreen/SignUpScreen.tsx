import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@styles';
import { SignUpForm } from '@components';
import { useTranslation } from 'react-i18next';

export const SignUpScreen = () => {
    const { t } = useTranslation();
    return (
        <ScreenContainer>
            <Text>{t('authentication.signUp')}</Text>
            <SignUpForm />
        </ScreenContainer>
    );
};
