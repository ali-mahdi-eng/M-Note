"use client"

import { NoteProps } from '@/app/types/types';

import "./style/header.css";
import './style/material-symbols-outlined.css';




function SortButton() {
	function handleSortButton() {
		// sort by (name, date, group)
	}
	return ( <button onClick={handleSortButton} className={"sortButton materialSymbolsOutlined"}>sort</button> )
}



function Header() {
	return (
		<header className="Header">
			<span className="AppTitle"> M-Note </span>
			<SortButton />
		</header>
		)
}



export default Header;