/*  ##### Now #####
	This file code is just like: "@/components/note/page.tsx" code,
	Copy the code and put it here when it completed.
*/
// --- --- ---
/*  ##### Future (Soon) #####
	This file may deleted,
	And the use will depends on "@/components/note/page.tsx" file only.
*/

// 👇 PAST CODE BELLOW  👇 



"use client"


import { NoteProps } from '@/app/types/types';
import localDatabase from '@/app/components/local-database'
// Control Bar Buttons


import '../components/style/note.css';
import '../components/style/material-symbols-outlined.css';


// import React from 'react';
// import { useState } from 'react';



// const [title, setTitle] = useState("Untitled");
// const [text, setText] = useState("Write Here");
// const [date, setDate] = useState("2026-8-15");






function NoteTitle({ value } : {value:string}) {
	return (
		<input type="text" value={value} />
	)
}

function NoteText({ value } : {value:string}) {
	return ( <span className="NoteText"> {value} </span> )
}

// Last Update date (modifyDate)
function NoteDate({ modifyDate } : {modifyDate:string | null}) {
	return ( <span className="modifyDate"> {modifyDate} </span> )
}



function LastModifiedIcon() {
	return (<span className={"LastModifiedIcon materialSymbolsOutlined"}>border_color</span>);
}













// const [noteEditable, setNoteEditable] = useState<boolean>(false);


// Note Tools Bar Buttons
function AddNoteToGroupButton() {
	function handleAddNoteToGroupButton() {
		// setNoteEditable(true);
		// Add Code To add this note to group
	}
	return ( <button onClick={handleAddNoteToGroupButton} className={"addNoteToGroupButton materialSymbolsOutlined"}> add to group </button> )
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
	return ( <button onClick={handleSaveEditeNoteButton} className={"saveEditNoteButton materialSymbolsOutlined"}> done </button> )
}

function DeleteNoteButton() {
	function handleDeleteNoteButton() {
		// Add Code To Delete This Note
	}
	return ( <button onClick={handleDeleteNoteButton} className={"deleteButton materialSymbolsOutlined"}> delete </button> )
}






function ToolsBar({ id } : {id:string}) {
	return (
		<div className="ToolsBar">
			<AddNoteToGroupButton />
			{/* { (isNoteEditable) ? (<SaveEditNoteButton />) : (<EditNoteButton />) } */}
			<EditNoteButton />
			<DeleteNoteButton />
		</div>
	)
}


function SmallNote({ id, title, text, charactersCount, creationDate, isModified, modifyDate} : NoteProps) {
	return(
		<div className={"SmallNote"}> 
			<ToolsBar id={id} />
			<NoteTitle value={title}/>
			<NoteText value={text}/>
			<NoteDate modifyDate={modifyDate}/>
			<LastModifiedIcon />
		</div>
	)
}
export default SmallNote;