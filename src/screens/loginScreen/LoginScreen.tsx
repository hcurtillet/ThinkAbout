import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScreenContainer } from '@styles';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '@types';
import { routes } from '@components';

export const LoginScreen = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();
    const goToSignUp = () => {
        navigation.navigate(routes.signUp);
    };
    return (
        <ScreenContainer>
            <Text>Login Screen</Text>
            <TouchableOpacity onPress={goToSignUp}>
                <Text>Sign up</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
};
