"use client"

import Link from 'next/link';
import { NavigationProps } from '@/app/types/types';

import './style/navigation.css';
import './style/material-symbols-outlined.css';





function NavigationButton({ text, target, id }: NavigationProps) {
	const href : string = target === 'home' ? '/' : `/${target}`

	return ( <Link href={href} className={"NavigationButton materialSymbolsOutlined"} id={id}>{text}</Link> )
}



function NavigationBar() {
	return (
		<nav className={"NavigationBar"}>
			<NavigationButton text="Folder" target="folders" id="folders"/>
			<NavigationButton text="Home" target="home" id="home"/>
			{/* "Send To Trash" Should move into settingspage */}
			{/* <NavigationButton text="restore_from_trash" target="trash" id="trash"/> */}
			<NavigationButton text="Settings" target="settings" id="settings"/>
		</nav>
	)
}


export default NavigationBar;