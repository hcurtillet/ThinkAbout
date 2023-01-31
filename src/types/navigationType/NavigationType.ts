import React from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationType = {
    name: string;
    screen: React.ComponentType<any>;
};

export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    App: undefined;
};
export type RootScreenNavigationProp =
    NativeStackNavigationProp<RootStackParamList>;

export type AppTabParamList = {
    home: undefined;
    profile: undefined;
};

export type AppTabNavigationProp = NativeStackNavigationProp<AppTabParamList>;
