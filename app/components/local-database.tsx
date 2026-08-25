"use client"

import { NoteProps } from '@/app/types/types';


// // CRUD -- create, read, update, delete
// const localDatabase = {
// 	data: JSON.parse(localStorage.getItem("localDatabase") || "{}" ),
// 	// {notesList} :save data as array of objects, each object is a note details (id, title, text, ..etc)
// 	notesList: JSON.parse(localStorage.getItem("localDatabase") || '{"version": "0.1","notesList": [] }' )["notesList"],
// 	create: createNewNote,
// 	update: editNote,
// 	remove: removeNote
// }

// CRUD -- create, read, update, delete
const localDatabase = {
	version: getLocalDatabase().version,
	data: getLocalDatabase(),
	// {notesList} :save data as array of objects, each object is a note details (id, title, text, ..etc)
	notesList: getLocalDatabase()["notesList"],
	create: createNewNote,
	update: editNote,
	remove: removeNote
}


// get localStorage data, if not exist create it with default values
function getLocalDatabase() {
	if (typeof window === "undefined") {
    	return { version: "0.1", notesList: [] };
  	} 
	if (!localStorage.getItem("localDatabase")) {
		localStorage.setItem("localDatabase", JSON.stringify({ version: "0.1", notesList: [] }));
	}

	return JSON.parse(localStorage.getItem("localDatabase") || '{"version": "0.1", "notesList": [] }');
}









function createID() : string {
	const id: string = `${Math.random()*10}-${Date.now()}`;
	return id;
}



function createNewNote({ id, title, text, charactersCount, creationDate, isModified, lastModifyDate} : NoteProps) {
	const newNote = {
			id: createID(),
			title: title,
			text: text,
			charactersCount: charactersCount,
			creationDate: creationDate,
			isModified: isModified,
			lastModifyDate: lastModifyDate
		}
	localDatabase.notesList.push(newNote)
	localStorage.setItem("localDatabase", JSON.stringify(localDatabase));
}

function editNote({ id, title, text, charactersCount, creationDate, isModified, lastModifyDate} : NoteProps) {
	// code
}

function removeNote({ id, title, text, charactersCount, creationDate, isModified, lastModifyDate} : NoteProps) {
	// code
}








export default localDatabase;
