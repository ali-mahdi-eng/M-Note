"use client"

import localDatabase from '@/app/components/local-database'
import Header from '@/app/components/header'
import NavigationBar from '@/app/components/navigation'
import SmallNote from '@/app/components/small-note'
import { DBProps, NoteProps } from '@/app/types/types'




function CreateNewNoteButton() {
	function handleCreateNewNoteButton(): void {
		// code
	}
	return <button onClick={handleCreateNewNoteButton} id="createNewNoteButton"> + </button> ;
}


function NotesList({ db } : { db : DBProps }) {
	if (!db || db["notesList"].length === 0) {
		return <p> No Notes Found </p>
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
			modifyDate={note.modifyDate}
		/> );
	return ( <section>{notesList}</section> )

}


function HomePage() {
	return (
		<main className="main">
			<Header />
			<NotesList db={localDatabase}/>
			<CreateNewNoteButton />
			<NavigationBar />
		</main>
	)
}

export default HomePage;