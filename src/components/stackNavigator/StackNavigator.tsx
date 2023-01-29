import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen } from '@screens';
import { NavigationInterface } from '@types';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName = '';
                        switch (route.name) {
                            case routes.home.name:
                                return (
                                    <Icon
                                        name={'home'}
                                        size={size}
                                        color={color}
                                    />
                                );
                            case routes.profile.name:
                                return (
                                    <Icon
                                        name={'profile'}
                                        size={size}
                                        color={color}
                                    />
                                );
                        }
                        return (
                            <Icon name={iconName} size={size} color={color} />
                        );
                    },
                })}>
                <Tab.Screen
                    name={routes.home.name}
                    component={routes.home.screen}
                />
                <Tab.Screen
                    name={routes.profile.name}
                    component={routes.profile.screen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const routes: { [key in screens]: NavigationInterface } = {
    home: {
        name: 'Home',
        screen: HomeScreen,
    },
    profile: {
        name: 'Profile',
        screen: ProfileScreen,
    },
};

type screens = 'home' | 'profile';
