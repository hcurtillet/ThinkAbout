import { StackNavigator } from '@components';
import React from 'react';
import { store } from '@store';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@store/i18n/en.json';
import fr from '@store/i18n/fr.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        fr: {
            translation: fr,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
});
const App = () => {
    return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
    );
};

export default App;
