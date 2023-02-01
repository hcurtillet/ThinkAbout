import React from 'react';
import { Formik } from 'formik';
import { Button, ErrorMessage, routes, TextInput } from '@components';
import { FormContainer } from '@styles';
import { RootScreenNavigationProp } from '@types';
import styled from 'styled-components';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';

export const SignUpForm = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();

    const { t } = useTranslation();

    const [errorMessages, setErrorMessages] = React.useState<string | null>();

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
            setErrorMessages(t('authentication.passwordsDoNotMatch'));
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
                        label={t('authentication.email')}
                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry={true}
                        value={values.password}
                        label={t('authentication.password')}
                    />
                    <TextInput
                        onChangeText={handleChange('password2')}
                        onBlur={handleBlur('password2')}
                        secureTextEntry={true}
                        value={values.password2}
                        label={t('authentication.confirmPassword')}
                    />
                    {errorMessages && (
                        <ErrorMessage errorMessage={errorMessages} />
                    )}
                    <ButtonContainer>
                        <Button
                            onPress={handleSubmit}
                            title={t('authentication.signUp')}
                        />
                        <Button
                            onPress={goToLogin}
                            title={t('authentication.login')}
                        />
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
