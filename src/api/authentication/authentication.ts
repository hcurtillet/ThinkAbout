import auth from '@react-native-firebase/auth';

export const authentication = {
    login: async (email: string, password: string) => {
        try {
            const res = await auth().signInWithEmailAndPassword(
                email,
                password,
            );
            return res;
        } catch (error) {
            throw error;
        }
    },
    signUp: async (email: string, password: string) => {
        try {
            return await auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    },
};
