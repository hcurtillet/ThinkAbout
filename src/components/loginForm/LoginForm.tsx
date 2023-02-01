import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormContainer } from '@styles';
import { TextInput, Button, routes, ErrorMessage } from '@components';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '@types';
import { View } from 'react-native';
import styled from 'styled-components';
import api from '@api';

export const LoginForm = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();
    const [errorMessages, setErrorMessage] = useState<string>('');

    const logIn = async (values: { email: string; password: string }) => {
        try {
            const { email, password } = values;

            const result = await api.authentication.login(email, password);
            if (result) {
                navigation.navigate(routes.app);
            }
        } catch (error: any) {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                setErrorMessage('User not found');
            }
            if (error.code === 'auth/wrong-password') {
                setErrorMessage('Wrong password');
            }
        }
    };

    const goToSignUp = () => {
        navigation.navigate(routes.signUp);
    };
    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={logIn}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <FormContainer>
                    <TextInput
                        label={'Email'}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        label={'Password'}
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {errorMessages && (
                        <ErrorMessage errorMessage={errorMessages} />
                    )}
                    <ButtonContainer>
                        <Button onPress={handleSubmit} title="Login" />
                        <Button onPress={goToSignUp} title={'SignUp'}></Button>
                    </ButtonContainer>
                </FormContainer>
            )}
        </Formik>
    );
};

const ButtonContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
