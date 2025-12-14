import type { RootState } from "@app/providers/store";
import type { Task } from "@entities/task/model/types";
import { TaskCard } from "@entities/task/ui";
import { openTaskDetails } from "@features/task-details";
import { useDispatch, useSelector } from "react-redux";

export function TaskBoard() {
	const tasks: Task[] = useSelector(
		(state: RootState) => state.taskBoard.Tasks,
	);
	const dispatch = useDispatch();

	return (
		<div>
			{tasks.map((task) => (
				<TaskCard
					task={task}
					key={task.id}
					onClick={() => dispatch(openTaskDetails(task.id))}
				/>
			))}
		</div>
	);
}
