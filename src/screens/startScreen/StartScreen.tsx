import React, { useEffect, useState } from 'react';
import { ScreenContainer } from '@styles';
import { Loader, routes } from '@components';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '@types';

export const StartScreen = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const navigation = useNavigation<RootScreenNavigationProp>();

    useEffect(() => {
        if (!loading) {
            return;
        }
        auth().onAuthStateChanged(userState => {
            setUser(userState);

            if (loading) {
                setLoading(false);
            }
        });
    }, [loading]);

    if (loading) {
        // sleep for 2 seconds
        return (
            <ScreenContainer>
                <Loader />
            </ScreenContainer>
        );
    }

    if (!user) {
        navigation.navigate(routes.login);
    } else {
        navigation.navigate(routes.app);
    }

    return <></>;
};
