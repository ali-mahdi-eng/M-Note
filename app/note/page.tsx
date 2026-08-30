"use client"


import { NoteProps } from '@/app/types/types';
import localDatabase from '@/app/components/local-database'
import { getNoteContentById } from './get-note-by-index';

import '../components/style/note.css';
import '../components/style/material-symbols-outlined.css';


import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';








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

function DeleteNoteButton({ noteID } : {noteID: string }) {
	function handleDeleteNoteButton() {
		// Add code here to confirm before delete
		// code
		localDatabase.deleteNote({noteID});
		history.back();
	}
	return ( <button onClick={handleDeleteNoteButton} className="DeleteButton materialSymbolsOutlined"> delete </button> )
}



function ToolsBar({ id, group, isNoteSaved, handleSaveNoteButton } : {id:string, group:string | null, isNoteSaved:boolean, handleSaveNoteButton:() => void}) {

	return (
		<div className="ToolsBar">
			<BackButton />
			<SaveEditNoteButton isNoteSaved={isNoteSaved} handleSaveNoteButton={handleSaveNoteButton} />
			<AddNoteToGroupButton />
			<DeleteNoteButton noteID={id} />
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





function NoteEditor({ noteID } : { noteID: string | null }) {
	const noteContent = getNoteContentById(noteID);

	const [id, setId] = useState(noteContent?.id ?? createID());
	const [title, setTitle] = useState(noteContent?.title ?? "");
	const [text, setText] = useState(noteContent?.text ?? "");
	const [charactersCount, setCharactersCount] = useState(noteContent?.charactersCount ?? 0);
	const [creationDate, setCreationDate] = useState<string>(noteContent?.creationDate ?? new Date().toISOString().split('T')[0]);
	const [lastModifyDate, setLastModifyDate] = useState<string | null>(noteContent?.lastModifyDate ?? null);
	const [group, setGroup] = useState<string | null>(noteContent?.group ?? null);
	const [isNoteSaved, setNoteSaved] = useState(true);


	
	function handleSaveNoteButton() {
		setNoteSaved(true);
		// `createAndUpdateNote();`: If note exist update it else create new one
		localDatabase.createAndUpdateNote({ id, title, text, charactersCount, creationDate, lastModifyDate, group });
	}	

	function handleNoteChange({noteText}: {noteText: string | null}) {
		if (noteText) { setCharactersCount(noteText.length); }
		setNoteSaved(false);
		setLastModifyDate(new Date().toISOString().split('T')[0]);
	}
	

	return(
		<div className="Note" dir="auto"> 
			<ToolsBar id={id} group={group} isNoteSaved={isNoteSaved} handleSaveNoteButton={handleSaveNoteButton} />
			<NoteTitle value={title} onChange={(e) => {setTitle(e.target.value); handleNoteChange({noteText: e.target.value})}} />
			<NoteText value={text} onChange={(e) => {setText(e.target.value); handleNoteChange({noteText: null})}} />
			<NoteLastModifyDate value={(lastModifyDate) ? (lastModifyDate) : (creationDate)} />
			<LastModifiedIcon />
		</div>
	)
}








function NotePageContent() {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	return ( <NoteEditor key={id} noteID={id} /> );
}

function NotePage() {
	return (
		<Suspense fallback={null}>
			<NotePageContent />
		</Suspense>
	);
}


export default NotePage;