"use client"

import { Link } from "react-router-dom";

import localDatabase from '../components/local-database'
import Header from '../components/header'
import NavigationBar from '../components/navigation'
import SmallNote from '../components/small-note'
import type { DBProps, NoteProps } from '../types/types'


import '../style/home.css'




function CreateNewNoteButton() {
	// function handleCreateNewNoteButton(): void {
	// 	// code
	// 	location.assign("/note");
	// }
	// return (<button onClick={handleCreateNewNoteButton} id="createNewNoteButton" className={"createNewNoteButton materialSymbolsOutlined"}>add</button> );
	return ( <Link to={"/note"}  id={"createNewNoteButton"} className={"createNewNoteButton materialSymbolsOutlined"}>add</Link> )

}


function NotesList({ db } : { db : DBProps }) {
	if (!db || Object.keys(db["notesList"]).length === 0) {
		return <p className="noNotesFound"> There&#39;s no notes yet, Click + to add one. </p>
	}

	const notesList = Object.values(db["notesList"]).map((note: NoteProps, index: number)=> (
		<SmallNote 
			key={"key-" + index}
			index={index}
			id={note.id}
			title={note.title}
			text={note.text}
			charactersCount={note.charactersCount}
			creationDate={note.creationDate}
			isModified={note.isModified}
			lastModifyDate={note.lastModifyDate}
			group={note.group}
			/>
	));
	// Add `suppressHydrationWarning={true}` to element to silince warning about hydration.
	return ( <section className="NotesList" dir="auto">{notesList}</section> )

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
