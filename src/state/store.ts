import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { postApiSlice } from "./posts/postApiSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [postApiSlice.reducerPath]: postApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(postApiSlice.middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;