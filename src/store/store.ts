import {configureStore} from '@reduxjs/toolkit';
import gameReducer from './gameSlice';

export const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});

// Типы для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
