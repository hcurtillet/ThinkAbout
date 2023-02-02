import auth from '@react-native-firebase/auth';
import { TaskType } from '@types';
import firestore from '@react-native-firebase/firestore';

export const tasks = {
    add: async (task: TaskType) => {
        try {
            const {
                uid,
                email,
                displayName: name,
            } = (await auth().currentUser) || {};
            const check = await firestore().collection('users').doc(uid).get();
            if (!check.exists) {
                await firestore().collection('users').doc(uid).set({
                    name,
                    email,
                });
            }

            return await firestore().collection(`users/${uid}/tasks`).add(task);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getAll: async (): Promise<TaskType[]> => {
        try {
            const { uid } = (await auth().currentUser) || {};
            const tasks = await firestore()
                .collection(`users/${uid}/tasks`)
                .get();
            return tasks.docs.map(task => {
                return {
                    ...task.data(),
                    id: task.id,
                } as TaskType;
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    checkTask: async (id: string, isDone: boolean) => {
        try {
            const { uid } = (await auth().currentUser) || {};
            await firestore().collection(`users/${uid}/tasks`).doc(id).update({
                isDone,
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    deleteTask: async (id: string) => {
        try {
            const { uid } = (await auth().currentUser) || {};
            await firestore().collection(`users/${uid}/tasks`).doc(id).delete();
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
