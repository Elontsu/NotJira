import { Card } from "@shared/ui";
import type { PropsWithChildren } from "react";
import type { Task } from "../../model/types";
import styles from "./styles.module.css";

interface Props extends PropsWithChildren {
	task: Task;
	onClick: (taskId: string) => void;
}

export function TaskCard({ task, children, onClick }: Props) {
	return (
		<Card className={styles.task_card} onClick={() => onClick(task.id)}>
			<div>
				<span>{task.id}</span>
				{children}
			</div>
			<h3>{task.title}</h3>
		</Card>
	);
}
