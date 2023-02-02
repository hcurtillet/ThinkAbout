import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components';
import { Loader, TaskItem } from '@components';
import { useAppDispatch, useAppSelector } from '@store';
import {
    fetchAllTasks,
    selectTasks,
    selectTasksStatus,
} from '@store/taskSlice/taskSlice';
import { TaskType } from '@types';

export const TaskList = () => {
    const tasks = useAppSelector(selectTasks);
    const status = useAppSelector(selectTasksStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllTasks());
        }
    }, [status, dispatch]);

    const renderItem = ({ item, index }: { item: TaskType; index: number }) => {
        return <TaskItem {...item} index={index} key={item.id} />;
    };

    if (status === 'loading') {
        return (
            <Container>
                <Loader />
            </Container>
        );
    }

    return (
        <Container>
            <FlatList
                data={tasks}
                extraData={status}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Container>
    );
};

const Container = styled(View)`
    flex: 1;
    background-color: #fff;
    width: 100%;
    height: 80%;
`;
