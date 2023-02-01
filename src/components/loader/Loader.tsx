import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '@styles';

export const Loader = () => {
    return <ActivityIndicator size="large" color={colors.blue} />;
};
