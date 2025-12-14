import type { Task } from "@entities/task/model/types";
import { createSlice } from "@reduxjs/toolkit";

interface TaskBoardSlice {
	Tasks: Task[];
}

const initialState: TaskBoardSlice = {
	Tasks: [
		{
			id: "1",
			title: "Sample Task",
			description: "This is a sample task description.",
			boardId: "board-1",
			columnId: "column-1",
			position: 1,
			tags: [],
		},
		{
			id: "2",
			title: "Another Task",
			description: null,
			boardId: "board-1",
			columnId: "column-1",
			position: 2,
			tags: [],
		},
	],
};

export const taskBoardSlice = createSlice({
	name: "taskBoard",
	initialState,
	reducers: {},
});

// export const {} = taskBoardSlice.actions;
export const taskBoardReducer = taskBoardSlice.reducer;
