import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type ScreenType = 'Question' | 'Chest' | 'Timer';

interface Transaction {
    id: string;
    type: string;
    amount: number;
    timestamp: string;
}

interface UserData {
    userId: number;
    level: number;
    difficulty: number;
    language: string;
    balance: number;
    equity: number;
    completed: number;
    status: string;
    taskNum: number;
    timeToOpen: number;
    artifacts: string[];
    activeCount: number;
    basePrice: number;
}

interface GameState {
    quiz: {
        currentQuestion: number;
        equity: number;
        questionReward: number;
        screenType: ScreenType;
    };
    layout: {
        profileLevel: number;
        totalTokens: number;
        totalCorrectAnswers: number;
    };
    profile: {
        difficulty: Difficulty;
        artifacts: {
            rewind: number;
            shield: number;
            health: number;
        };
    };
    taskManagement: {
        userCount: number;
    };
    transactions: Transaction[];
    user: UserData | null;
}

const initialState: GameState = {
    quiz: {
        currentQuestion: 1,
        equity: 0,
        questionReward: 0,
        screenType: 'Question',
    },
    layout: {
        profileLevel: 1,
        totalTokens: 0,
        totalCorrectAnswers: 0,
    },
    profile: {
        difficulty: 'Easy',
        artifacts: {
            rewind: 0,
            shield: 0,
            health: 0,
        },
    },
    taskManagement: {
        userCount: 0,
    },
    transactions: [],
    user: null,
};

export const fetchUserData = createAsyncThunk<UserData, number>(
    'game/fetchUserData',
    async (chat_id, {rejectWithValue}) => {
        try {
            const response = await axios.post(
                'https://stage.iqpump.online/api/fetch_user',
                {
                    chat_id,
                    language: 'ru',
                },
                {
                    headers: {'Content-Type': 'application/json'},
                }
            );
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data || 'Ошибка сети');
        }
    }
);

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setQuestionData(
            state,
            action: PayloadAction<{
                question: number;
                equity: number;
                reward: number;
                screen: ScreenType;
            }>
        ) {
            const {question, equity, reward, screen} = action.payload;
            state.quiz.currentQuestion = question;
            state.quiz.equity = equity;
            state.quiz.questionReward = reward;
            state.quiz.screenType = screen;
        },
        updateProfileLevel(state, action: PayloadAction<number>) {
            state.layout.profileLevel = action.payload;
        },
        setDifficulty(state, action: PayloadAction<Difficulty>) {
            state.profile.difficulty = action.payload;
        },
        updateArtifact(
            state,
            action: PayloadAction<{
                type: keyof GameState['profile']['artifacts'];
                value: number;
            }>
        ) {
            const {type, value} = action.payload;
            state.profile.artifacts[type] = value;
        },
        addTransaction(state, action: PayloadAction<Transaction>) {
            state.transactions.push(action.payload);
        },
        setUserCount(state, action: PayloadAction<number>) {
            state.taskManagement.userCount = action.payload;
        },
        addCorrectAnswer(state) {
            state.layout.totalCorrectAnswers += 1;
        },
        addTokens(state, action: PayloadAction<number>) {
            state.layout.totalTokens += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(fetchUserData.rejected, (state, action) => {
            console.error('Ошибка загрузки пользователя:', action.payload);
        });
    },
});

export const {
    setQuestionData,
    updateProfileLevel,
    setDifficulty,
    updateArtifact,
    addTransaction,
    setUserCount,
    addCorrectAnswer,
    addTokens,
} = gameSlice.actions;

export default gameSlice.reducer;
