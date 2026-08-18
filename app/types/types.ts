


export type DBProps = {
	version: string,
	notesList: NoteProps[],
}


export type NoteProps = {
	id: string,
	title: string,
	text: string,
	charactersCount: number,
	creationDate: string,
	isModified: boolean,
	modifyDate: string | null
}


export type NavigationProps = {
	text: string,
	className: string,
	target: string,
	id: string
}





