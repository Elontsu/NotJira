import { taskDetailsReducer } from "@features/task-details";
import { configureStore } from "@reduxjs/toolkit";
import { taskBoardReducer } from "@widgets/task-board/model";

export const store = configureStore({
	reducer: {
		taskBoard: taskBoardReducer,
		taskDetails: taskDetailsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
