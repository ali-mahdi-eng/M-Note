"use client"

import { NoteProps } from '@/app/types/types';


// CRUD -- create, read, update, delete
const localDatabase = {
	data: JSON.parse(localStorage.getItem("localDatabase") || "{}" ),
	// {notesList} :save data as array of objects, each object is a note details (id, title, text, ..etc)
	notesList: JSON.parse(localStorage.getItem("localDatabase") || '{"version": "0.1","notesList": [] }' )["notesList"],
	create: createNewNote,
	update: editNote,
	remove: removeNote
}






function createID() : string {
	const id: string = `${Math.random()*10}-${Date.now()}`;
	return id;
}



function createNewNote({ id, title, text, charactersCount, creationDate, isModified, modifyDate} : NoteProps) {
	const newNote = {
			id: createID(),
			title: title,
			text: text,
			charactersCount: charactersCount,
			creationDate: creationDate,
			isModified: isModified,
			modifyDate: modifyDate
		}
	localDatabase.notesList.puah(newNote)
	localStorage.setItem("localDatabase", JSON.stringify(localDatabase));
}

function editNote({ id, title, text, charactersCount, creationDate, isModified, modifyDate} : NoteProps) {
	// code
}

function removeNote({ id, title, text, charactersCount, creationDate, isModified, modifyDate} : NoteProps) {
	// code
}








export default localDatabase;