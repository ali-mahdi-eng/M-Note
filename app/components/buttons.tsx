"use client"

import { NoteProps } from '@/app/types/types';

// import React from 'react';
// import { useState } from 'react'



// export const [noteEditable, setNoteEditable] = useState<boolean>(false);



// Note Tools Bar Buttons
export function AddNoteToGroupButton({ id } : {id:string}) {
	function handleAddNoteToGroupButton() {
		// setNoteEditable(true);
		// Add Code To add this note to group
	}
	return ( <button onClick={handleAddNoteToGroupButton}> add to group </button> )
}

export function EditNoteButton({ id }  : {id:string}) {
	function handleEditeNoteButton() {
		// setNoteEditable(true);
		// Add Code To Show Edit Tools
	}
	return ( <button onClick={handleEditeNoteButton}> edit </button> )
}

export function SaveEditNoteButton({ id }  : {id:string}) {
	function handleSaveEditeNoteButton() {
		// setNoteEditable(false);
		// Add Code To Save Edit
	}
	return ( <button onClick={handleSaveEditeNoteButton}> done </button> )
}

export function DeleteNoteButton({ id }  : {id:string}) {
	function handleDeleteNoteButton() {
		// Add Code To Delete This Note
	}
	return ( <button onClick={handleDeleteNoteButton}> delete </button> )
}



