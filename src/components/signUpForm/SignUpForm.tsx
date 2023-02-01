import React from 'react';
import { Formik } from 'formik';
import { Button, ErrorMessage, routes, TextInput } from '@components';
import { FormContainer } from '@styles';
import { RootScreenNavigationProp } from '@types';
import styled from 'styled-components';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export const SignUpForm = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();

    const [errorMessages, setErrorMessages] = React.useState<string>('');

    const goToLogin = () => {
        navigation.navigate(routes.login);
    };

    const onSubmit = async (values: {
        email: string;
        password: string;
        password2: string;
    }) => {
        const { email, password, password2 } = values;
        if (password !== password2) {
            setErrorMessages('Passwords do not match');
            return;
        }
        try {
            const res = await auth().createUserWithEmailAndPassword(
                email,
                password,
            );
            console.log('result :', res);
        } catch (e) {
            console.log('error :', e);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '', password2: '' }}
            onSubmit={onSubmit}>
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
                    {errorMessages && (
                        <ErrorMessage errorMessage={errorMessages} />
                    )}
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
