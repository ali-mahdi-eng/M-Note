


export type DBProps = {
	version: string,
	notesList: { [key: string]: NoteProps },
	trashList: { [key: string]: NoteProps },
}


export type NoteProps = {
	index?: number,
	id: string,
	title: string,
	text: string,
	charactersCount: number,
	creationDate: string,
	isModified?: boolean,
	lastModifyDate: string | null,
	group: string | null
}


export type NavigationProps = {
	text: string,
	target: string,
	id: string,
	activeNav?: null| "home" | "folders" | "settings"
}





