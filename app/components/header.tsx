"use client"

import { NoteProps } from '@/app/types/types';



function SortButton() {
	function handleSortButton() {
		// sort by (name, date, group)
	}
	return ( <button onClick={handleSortButton} className="sortButton"> sort by </button> )
}



function Header() {
	return (
		<header className="header">
			<h1 className="AppTitle"> M-note </h1>
			<SortButton />
		</header>
		)
}



export default Header;