import React from 'react';
import { Modal, View } from 'react-native';
import { Button, DatePicker, TextInput } from '@components';
import styled from 'styled-components';
import { Formik } from 'formik';
import { TaskType } from '@types';
import api from '@api';
import { FormContainer } from '@styles';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@store';
import { fetchAllTasks } from '@store/taskSlice';

type Props = {
    isVisible: boolean;
    onClose: () => void;
};

const initialValues: TaskType = {
    name: '',
    description: '',
    date: '',
    repeatInterval: 0,
    isDone: false,
};

export const AddTaskModal = (props: Props) => {
    const { isVisible, onClose } = props;

    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const onSubmit = async (values: TaskType) => {
        try {
            console.log('add task:', values);
            await api.tasks.add(values);
            dispatch(fetchAllTasks());
            onClose();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Modal
            animationType={'slide'}
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <ModalContainer>
                <MessageView>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            values,
                        }) => (
                            <FormContainer>
                                <TextInput
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    label={t('task.name')}
                                />
                                <TextInput
                                    onChangeText={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    value={values.description}
                                    label={t('task.description')}
                                />
                                <DatePicker
                                    date={values.date}
                                    onChangeDate={newDate =>
                                        setFieldValue('date', newDate)
                                    }
                                    title={t('task.date')}
                                />
                                <Button
                                    onPress={handleSubmit}
                                    title={t('task.save')}
                                />
                            </FormContainer>
                        )}
                    </Formik>
                    <Button onPress={onClose} title="Close" />
                </MessageView>
            </ModalContainer>
        </Modal>
    );
};

const ModalContainer = styled(View)`
    background-color: #00000077;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const MessageView = styled(View)`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 80%;
`;
