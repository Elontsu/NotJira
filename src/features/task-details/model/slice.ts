import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface TaskDetailsState {
	isOpen: boolean;
	taskId: string | null;
	isLoading: boolean;
}

const initialState: TaskDetailsState = {
	isOpen: false,
	taskId: null,
	isLoading: false,
};

export const taskDetailsSlice = createSlice({
	name: "taskDetails",
	initialState,
	reducers: {
		openTaskDetails: (state, action: PayloadAction<string>) => {
			state.isOpen = true;
			state.taskId = action.payload;
		},
		closeTaskDetails: (state) => {
			state.isOpen = false;
			state.taskId = null;
		},
	},
});

export const { closeTaskDetails, openTaskDetails } = taskDetailsSlice.actions;
export const taskDetailsReducer = taskDetailsSlice.reducer;
