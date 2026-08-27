"use client"


import { NoteProps } from '@/app/types/types';
import localDatabase from '@/app/components/local-database'
// Control Bar Buttons


import '../components/style/note.css';
import '../components/style/material-symbols-outlined.css';


import { useState } from 'react';








function NoteTitle({ value, onChange } : {value:string, onChange:(e: React.ChangeEvent<HTMLInputElement>) => void}) {
	return (<input value={value} onChange={onChange} type="text" className="NoteTitle" placeholder="Title Here" /> )
}

function NoteText({ value, onChange } : {value:string, onChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void}) {
	return ( <textarea value={value} onChange={onChange} className="NoteText" dir="auto" placeholder="Write Note Here.."></textarea> )
}


// Last Update date (modifyDate)
function NoteLastModifyDate({ value } : {value:string | null}) {
	return ( <span className="LastModifyDate"> {value} </span> )
}


function LastModifiedIcon() {
	return (<span className="LastModifiedIcon materialSymbolsOutlined">border_color</span>);
}















// Note Tools Bar Buttons
function BackButton() {
	function handleBackButton() {
		// Add Code To Go to home page
		history.back();
	}
	return ( <button onClick={handleBackButton} className="BackButton materialSymbolsOutlined">arrow_back</button> )
}

function EditNoteButton() {
	function handleEditeNoteButton() {
		// setNoteEditable(true);
		// Add Code To Show Edit Tools
	}
	return ( <button onClick={handleEditeNoteButton} className="editNoteButton materialSymbolsOutlined"> edit </button> )
}

function SaveEditNoteButton({ isNoteSaved, handleSaveNoteButton } : { isNoteSaved:boolean, handleSaveNoteButton:() => void}) {
	return ( <button className="SaveEditNoteButton materialSymbolsOutlined" onClick={handleSaveNoteButton} style={{opacity: isNoteSaved ? 0.5 : 1, pointerEvents: isNoteSaved ? 'none' : 'auto'}}> save </button> )
}

function AddNoteToGroupButton() {
	function handleAddNoteToGroupButton() {
		// setNoteEditable(true);
		// Add Code To add this note to group
	}
	return ( <button onClick={handleAddNoteToGroupButton} className="AddNoteToGroupButton materialSymbolsOutlined">folder</button> )
}

function DeleteNoteButton() {
	function handleDeleteNoteButton() {
		// Add Code To Delete This Note
	}
	return ( <button onClick={handleDeleteNoteButton} className="DeleteButton materialSymbolsOutlined"> delete </button> )
}



function ToolsBar({ id, group, isNoteSaved, handleSaveNoteButton } : {id:string, group:string | null, isNoteSaved:boolean, handleSaveNoteButton:() => void}) {
	// const [noteEditable, setNoteEditable] = useState(false);

	return (
		<div className="ToolsBar">
			<BackButton />
			{/* { (isNoteEditable) ? (<SaveEditNoteButton />) : (<EditNoteButton />) } */}
			<SaveEditNoteButton isNoteSaved={isNoteSaved} handleSaveNoteButton={handleSaveNoteButton} />
			{/* <EditNoteButton /> */}
			<AddNoteToGroupButton />
			<DeleteNoteButton />
		</div>
	)
}











function createID() : string {
	// These comments are writren by AI, and they are not part of the code. They are just for explanation.
	// Create a unique ID for the note using current timestamp and a random number
	// The random number is used to reduce the chance of collision if multiple notes are created in the same millisecond (if user changes the system time)
	const id: string = `${Date.now()}-${Math.floor(Math.random()*1000)}`;
	return id;
}






function Note(/*{ id, title, text, charactersCount, creationDate, lastModifyDate} : NoteProps*/) {
	const [title, setTitle] = useState("Untitled");
	const [text, setText] = useState("Write Here");
	const [creationDate, setCreationDate] = useState<string>(new Date().toISOString().split('T')[0]);
	const [lastModifyDate, setLastModifyDate] = useState<string | null>(null);
	const [id, setId] = useState(createID());
	const [group, setGroup] = useState<string | null>(null);
	const [charactersCount, setCharactersCount] = useState(0);
	// const [isNoteEditable, setNoteEditable] = useState(false);
	const [isNoteSaved, setNoteSaved] = useState(true);



	function handleSaveNoteButton() {
		setNoteSaved(true);
		// Add Code To Save Edit
	}	

	function handleNoteChange({noteText}: {noteText: string | null}) {
		if (noteText) { setCharactersCount(noteText.length); }
		setNoteSaved(false);
		setLastModifyDate(new Date().toISOString().split('T')[0]);
	}
	


	return(
		<div className="Note"> 
			<ToolsBar id={id} group={group} isNoteSaved={isNoteSaved} handleSaveNoteButton={handleSaveNoteButton} />
			<NoteTitle value={title} onChange={(e) => {setTitle(e.target.value); handleNoteChange({noteText: e.target.value})}} />
			<NoteText value={text} onChange={(e) => {setText(e.target.value); handleNoteChange({noteText: null})}} />
			<NoteLastModifyDate value={(lastModifyDate) ? (lastModifyDate) : (creationDate)} />
			<LastModifiedIcon />
		</div>
	)
}
export default Note;