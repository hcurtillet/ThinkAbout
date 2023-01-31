import React from 'react';
import { Formik } from 'formik';
import { FormContainer } from '@styles';
import { TextInput, Button, routes } from '@components';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '@types';
import { View } from 'react-native';
import styled from 'styled-components';

export const LoginForm = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();
    const goToSignUp = () => {
        navigation.navigate(routes.signUp);
    };
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}>
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
