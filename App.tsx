import { StackNavigator } from '@components';
import React from 'react';
import { store } from '@store';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
    );
};

export default App;
