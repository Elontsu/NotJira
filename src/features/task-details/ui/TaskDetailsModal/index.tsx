import type { RootState } from "@app/providers/store";
import { closeTaskDetails } from "@features/task-details";
import { Modal } from "@shared/ui";
import { useDispatch, useSelector } from "react-redux";

export function TaskDetailsModal() {
	const { isOpen, taskId } = useSelector(
		(state: RootState) => state.taskDetails,
	);
	const tasks = useSelector((state: RootState) => state.taskBoard.Tasks);
	const dispatch = useDispatch();
	const task = tasks.find((t) => t.id === taskId);

	if (!task || !taskId) return null;

	return (
		<Modal isOpen={isOpen} onClose={() => dispatch(closeTaskDetails())}>
			<div>
				<h1>{task.title}</h1>
				<p>{task.description}</p>
			</div>
		</Modal>
	);
}
