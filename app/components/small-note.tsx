"use client"

import Link from 'next/link';
import { NoteProps } from '@/app/types/types';

import '../components/style/small-note.css';
import '../components/style/material-symbols-outlined.css';








function NoteTitle({ value } : {value:string}) {
	return ( <span className="NoteTitle">{value}</span> )
}

function NoteText({ value } : {value:string}) {
	return ( <span className="NoteText">{value}</span> )
}

// Last Update date (modifyDate)
function NoteLastModifyDate({ value } : {value:string | null}) {
	return ( <span className="LastModifyDate">{value}</span> )
}







function SmallNote({ index, id, title, text, charactersCount, creationDate, lastModifyDate} : NoteProps) {
	return(
		<div className="SmallNote" id={id} dir="auto" /*onClick={()=>{location.assign(`/note?id=${id}`)}}*/> 
			<NoteTitle value={title}/>
			<NoteText value={text}/>
			<NoteLastModifyDate value={lastModifyDate}/>
			<Link href={`/note?id=${id}`} key={index} style={{position:"absolute", height:"100%", width:"100%"}} ></Link>
		</div>
	)
}
export default SmallNote;