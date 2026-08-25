"use client"

import Link from 'next/link';
import localDatabase from '@/app/components/local-database'
import Header from '@/app/components/header'
import NavigationBar from '@/app/components/navigation'
import SmallNote from '@/app/components/small-note'
import { DBProps, NoteProps } from '@/app/types/types'


import './page.css'




function CreateNewNoteButton() {
	// function handleCreateNewNoteButton(): void {
	// 	// code
	// 	location.assign("/note");
	// }
	// return (<button onClick={handleCreateNewNoteButton} id="createNewNoteButton" className={"createNewNoteButton materialSymbolsOutlined"}>add</button> );
	return ( <Link href={"/note"}  id={"createNewNoteButton"} className={"createNewNoteButton materialSymbolsOutlined"}>add</Link> )

}


function NotesList({ db } : { db : DBProps }) {
	if (!db || db["notesList"].length === 0) {
		return <p className="noNotesFound"> There&#39;s no notes yet, Click + to add one. </p>
	}

	const notesList = db["notesList"].map((note: NoteProps)=> 
		<SmallNote 
			key={note.id}
			id={note.id}
			title={note.title}
			text={note.text}
			charactersCount={note.charactersCount}
			creationDate={note.creationDate}
			isModified={note.isModified}
			lastModifyDate={note.lastModifyDate}
		/> );
	return ( <section className={"NotesList"} dir="auto">{notesList}</section> )

}


function HomePage() {
	return (
		<main className="main">
			<Header />
			<NotesList db={localDatabase} />
			<CreateNewNoteButton />
			<NavigationBar />
		</main>
	)
}

export default HomePage;