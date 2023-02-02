import React, { useState } from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@styles';
import { AddTaskModal, Button, TaskList } from '@components';
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
    const { t } = useTranslation();

    const [isAddTaskModalVisible, setAddTaskModalVisible] = useState(false);
    return (
        <ScreenContainer>
            <TaskList />
            <AddTaskModal
                isVisible={isAddTaskModalVisible}
                onClose={() => setAddTaskModalVisible(false)}
            />
            <Text>Home Screen</Text>
            <Button
                onPress={() => setAddTaskModalVisible(true)}
                title={t('home.addTask')}
            />
        </ScreenContainer>
    );
};
