"use client"


import { NoteProps } from '@/app/types/types';
import localDatabase from '@/app/components/local-database'
// Control Bar Buttons


import '../components/style/note.css';
import '../components/style/material-symbols-outlined.css';


import React from 'react';
import { useState } from 'react';








function NoteTitle({ value } : {value:string}) {
	const [title, setTitle] = useState("Untitled");

	return (<input type="text" className={"NoteTitle"} value={value} placeholder="Title Here" /> )
}

function NoteText({ value } : {value:string}) {
	const [text, setText] = useState("Write Here");

	return ( <textarea value={value} className={"NoteText"} dir="auto"  placeholder="Write Note Here.."></textarea> )
}

// Last Update date (modifyDate)
function NoteLastModifyDate({ value } : {value:string | null}) {
	const [modifyDate, setModifyDate] = useState("2026-8-15");

	return ( <span className="LastModifyDate"> {value} </span> )
}



function LastModifiedIcon() {
	return (<span className={"LastModifiedIcon materialSymbolsOutlined"}>border_color</span>);
}















// Note Tools Bar Buttons
function BackButton() {
	function handleBackButton() {
		// Add Code To Go to home page
		history.back();
	}
	return ( <button onClick={handleBackButton} className={"BackButton materialSymbolsOutlined"}>arrow_back</button> )
}

function EditNoteButton() {
	function handleEditeNoteButton() {
		// setNoteEditable(true);
		// Add Code To Show Edit Tools
	}
	return ( <button onClick={handleEditeNoteButton} className={"editNoteButton materialSymbolsOutlined"}> edit </button> )
}

function SaveEditNoteButton() {
	function handleSaveEditeNoteButton() {
		// setNoteEditable(false);
		// Add Code To Save Edit
	}
	return ( <button onClick={handleSaveEditeNoteButton} className={"SaveEditNoteButton materialSymbolsOutlined"}> done </button> )
}

function AddNoteToGroupButton() {
	function handleAddNoteToGroupButton() {
		// setNoteEditable(true);
		// Add Code To add this note to group
	}
	return ( <button onClick={handleAddNoteToGroupButton} className={"AddNoteToGroupButton materialSymbolsOutlined"}>folder</button> )
}

function DeleteNoteButton() {
	function handleDeleteNoteButton() {
		// Add Code To Delete This Note
	}
	return ( <button onClick={handleDeleteNoteButton} className={"DeleteButton materialSymbolsOutlined"}> delete </button> )
}








function ToolsBar({ id } : {id:string}) {
	// const [noteEditable, setNoteEditable] = useState(false);

	return (
		<div className="ToolsBar">
			<BackButton />
			{/* { (isNoteEditable) ? (<SaveEditNoteButton />) : (<EditNoteButton />) } */}
			<EditNoteButton />
			<AddNoteToGroupButton />
			<DeleteNoteButton />
		</div>
	)
}


function Note({ id, title, text, charactersCount, creationDate, isModified, lastModifyDate} : NoteProps) {
	return(
		<div className={"Note"}> 
			<ToolsBar id={id} />
			<NoteTitle value={title}/>
			<NoteText value={text}/>
			<NoteLastModifyDate value={lastModifyDate}/>
			<LastModifiedIcon />
		</div>
	)
}
export default Note;