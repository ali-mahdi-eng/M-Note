"use client"

import { NoteProps } from '@/app/types/types';


// CRUD -- create, read, update, delete(remove)
const localDatabase = {
	version: getLocalDatabase().version,
	data: getLocalDatabase(),
	notesList: getLocalDatabase()["notesList"],
	
	createNote: createNote,
	updateNote: editNote,
	removeNote: removeNote
};






// get localStorage data, if not exist create it with default values
function getLocalDatabase() {
	if (typeof window === "undefined") {
    	return { version: "0.2", notesList: {} };
  	} 
	if (!localStorage.getItem("localDatabase")) {
		localStorage.setItem("localDatabase", JSON.stringify({ version: "0.2", notesList: {} }));
	}

	return JSON.parse(localStorage.getItem("localDatabase") || '{"version": "0.2", "notesList": {} }');
}










function createNote({ id, title, text, charactersCount, creationDate, lastModifyDate, group } : NoteProps) {
	const newNote = {
			id: id,
			title: title,
			text: text,
			charactersCount: charactersCount,
			creationDate: creationDate,
			lastModifyDate: lastModifyDate,
			group: group
		}
	localDatabase.notesList[id] = newNote;
	localStorage.setItem("localDatabase", JSON.stringify(localDatabase));
}


// Later: Delete This Function and update "createNote" function name into  "createAndUpdateNote"
function editNote({ id, title, text, charactersCount, creationDate, lastModifyDate, group } : NoteProps) {
	// code
}

function removeNote({ id, title, text, charactersCount, creationDate, lastModifyDate, group } : NoteProps) {
	// code
}








export default localDatabase;
