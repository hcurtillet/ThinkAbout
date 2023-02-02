import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { TaskType } from '@types';
import api from '@api';

type initialStateType = {
    tasks: TaskType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined;
};

const initialState: initialStateType = {
    tasks: [] as TaskType[],
    status: 'idle',
    error: null,
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<TaskType[]>) => {
            state.tasks = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchAllTasks.pending, state => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tasks = action.payload.sort((a, b) =>
                a.date < b.date ? -1 : 1,
            );
        });
        builder.addCase(fetchAllTasks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export const fetchAllTasks = createAsyncThunk(
    'tasks/fetchAllTasks',
    async () => {
        const response = await api.tasks.getAll();
        return response;
    },
);

export const { setTasks } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const selectTasksStatus = (state: RootState) => state.tasks.status;

export default taskSlice.reducer;
