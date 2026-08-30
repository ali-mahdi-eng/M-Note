"use client"

import { DBProps, NoteProps } from '@/app/types/types';




// `localDatabase` is stored in `localStorage`
const localDatabase = {
	version: getLocalDatabase().version,
	notesList: getLocalDatabase()["notesList"],
	trashList: getLocalDatabase()["trashList"],
	data: getLocalDatabase(),
	
	// CRUD -- create, read, update, delete
	createAndUpdateNote: createAndUpdateNote,
	deleteNote: deleteNote,

};







// get localStorage data, if not exist create it with default values
function getLocalDatabase() {
	// Prevent code from working in server side
	if (typeof window === "undefined") {
    	return { version:"0.3", notesList:{}, trashList:{} };
  	}

	// Add fallback structure of local database to localStorage in case it's not exist in `localStorage`
	if (!localStorage.getItem("localDatabase")) {
		localStorage.setItem("localDatabase", JSON.stringify({ version:"0.3", notesList:{}, trashList:{} }));
	}
	// Ensure that the user have the version of local Database
	clearOldVersions();

	return JSON.parse(localStorage.getItem("localDatabase") || '{ version:"0.3", notesList:{}, trashList:{} }');
}


// Clear Old Version Of Local Database
function clearOldVersions() {
	// Prevent code from working in server side
	if (typeof window === "undefined") return;

	// clear can be occure only if localStorage exist
	if (!localStorage.getItem("localDatabase")) return;
	const localDatabase = JSON.parse(localStorage.getItem("localDatabase") || '{ version:"0.3", notesList:{}, trashList:{} }');
	
	// db version [0.1]: in this version "save" was not work, so there's no useful data stored (just empty data)
	if (localDatabase?.version === "0.1") {
		localStorage.clear();
	}

	// db version [0.2]: in this version no one use the app, so this can be deleted safely
	if (localDatabase?.version === "0.2") {
		localDatabase["trashList"] = {};
		localDatabase["version"] = "0.3";
		localStorage.setItem("localDatabase", JSON.stringify(localDatabase));
	}
}








function createAndUpdateNote({ id, title, text, charactersCount, creationDate, lastModifyDate, group } : NoteProps) {
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



// Send Note into trash (in localStorage)
function deleteNote({ noteID } : {noteID: string }) {
	if (!noteID) return;
	// Copy Note into trash list `localDatabase.trashList`
	const deletedNote: string =  localDatabase?.notesList?.[noteID];
	localDatabase.trashList[noteID] = deletedNote;

	// Delete Note from data list `localDatabase.noteList`
	delete localDatabase?.notesList?.[noteID];

	// save updates into localStorage
	localStorage.setItem("localDatabase", JSON.stringify(localDatabase));
}








export default localDatabase;
