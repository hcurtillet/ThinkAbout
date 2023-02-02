import React from 'react';
import { TaskType } from '@types';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { colors } from '@styles';
import { formatDate } from '@utils';
import Icon from 'react-native-vector-icons/Feather';
import api from '@api';
import { useAppDispatch } from '@store';
import { fetchAllTasks } from '@store/taskSlice';

type Props = TaskType & {
    key: string;
    index: number;
};
export const TaskItem = (props: Props) => {
    const { name, date, id, index, isDone } = props;

    const dispatch = useAppDispatch();

    const handleCheck = async () => {
        try {
            await api.tasks.checkTask(id, !isDone);
            dispatch(fetchAllTasks());
        } catch (e) {
            console.log(e);
        }
    };

    const handleDelete = async () => {
        try {
            await api.tasks.deleteTask(id);
            dispatch(fetchAllTasks());
        } catch (e) {
            console.log(e);
        }
    };
    const trash = <Icon name="trash" size={30} color={colors.red} />;
    const check = (
        <Icon
            name="check"
            size={30}
            color={isDone ? colors.green : colors.grey}
        />
    );

    return (
        <Container index={index}>
            <ContaintContainer>
                <NameText>{name}</NameText>
                <DateContainer>
                    <DateText>{formatDate(date)}</DateText>
                </DateContainer>
            </ContaintContainer>
            <ButtonContainer>
                <Button onPress={handleCheck}>{check}</Button>
                <Button onPress={handleDelete}>{trash}</Button>
            </ButtonContainer>
        </Container>
    );
};

const Container = styled(View)<{ index: number }>`
    flex: 1;
    flex-direction: row;
    width: 90%;
    height: 60px;
    border-top-width: ${props => (props.index === 0 ? '1px' : '0px')};
    border-bottom-width: 1px;
    border-color: ${colors.grey};
    align-self: center;
`;

const Button = styled(TouchableOpacity)`
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

const ContaintContainer = styled(View)`
    width: 75%;
`;

const ButtonContainer = styled(View)`
    flex-direction: row;
    width: 25%;
`;

const NameText = styled(Text)`
    font-size: 20px;
    font-weight: bold;
`;

const DateContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const DateText = styled(Text)`
    font-size: 16px;
    color: ${colors.grey};
`;
