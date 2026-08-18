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
import { AddNoteToGroupButton, EditNoteButton, SaveEditNoteButton, DeleteNoteButton, /* isNoteEditable */ } from '@/app/components/buttons'


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



function IsModifiedIcon() {
	return "📝 ";
}



function ToolsBar({ id } : {id:string}) {
	return (
		<div className="ToolsBar">
			<AddNoteToGroupButton id={id} />
			{/* { (isNoteEditable) ? (<SaveEditNoteButton id={id} />) : (<EditNoteButton id={id} />) } */}
			<EditNoteButton id={id} />
			<DeleteNoteButton id={id} />
		</div>
	)
}


function SmallNote({ id, title, text, charactersCount, creationDate, isModified, modifyDate} : NoteProps) {
	return(
		<div> 
			<ToolsBar id={id} />
			<NoteTitle value={title}/>
			<NoteText value={text}/>
			<NoteDate modifyDate={modifyDate}/>
			{ isModified && <IsModifiedIcon /> }  { /* show an svg icon for modified (edited) icon only if the note is modified (edited), otherwise don't show anything else. */ }
		</div>
	)
}
export default SmallNote;