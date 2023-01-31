import React from 'react';
import { Formik } from 'formik';
import { Button, routes, TextInput } from '@components';
import { FormContainer } from '@styles';
import { RootScreenNavigationProp } from '@types';
import styled from 'styled-components';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SignUpForm = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();

    const goToLogin = () => {
        navigation.navigate(routes.login);
    };

    return (
        <Formik
            initialValues={{ email: '', password: '', password2: '' }}
            onSubmit={values => console.log(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <FormContainer>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        label="Email"
                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry={true}
                        value={values.password}
                        label="Password"
                    />
                    <TextInput
                        onChangeText={handleChange('password2')}
                        onBlur={handleBlur('password2')}
                        secureTextEntry={true}
                        value={values.password2}
                        label="Password"
                    />
                    <ButtonContainer>
                        <Button onPress={handleSubmit} title="SignUp" />
                        <Button onPress={goToLogin} title={'Login'}></Button>
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
