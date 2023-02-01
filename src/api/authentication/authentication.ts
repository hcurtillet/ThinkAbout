import auth from '@react-native-firebase/auth';

export const authentication = {
    login: async (email: string, password: string) => {
        try {
            return await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            throw error;
        }
    },
    signUp: async (email: string, password: string) => {
        try {
            return await auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            throw error;
        }
    },
};
