type Tag = {
	id: string;
	title: string;
	color: string;
};

export interface Task {
	id: string;
	columnId: string;
	boardId: string;

	title: string;
	description: string | null;

	position: number;
	tags: Tag[];

	priority?: "low" | "medium" | "high";
}
