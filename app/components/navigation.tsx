"use client"

import Link from 'next/link';
import { NavigationProps } from '@/app/types/types';



// function NavigationButton({ text, className, target, id }: NavigationProps) {
// 	function handleNavigationButton() {
// 		location.assign(`/${target}`);
// 	}
// 	return ( <button onClick={handleNavigationButton} className={className} data-target={target} id={id}> {text} </button> )
// }


function NavigationButton({ text, className, target, id }: NavigationProps) {
	const href : string = target === 'home' ? '/' : `/${target}`

	return ( <Link href={href} className={className} id={id}>{text}</Link> )
}



function NavigationBar() {
	return (
		<nav className="NavigationBar">
			<NavigationButton text="Home" className="NavigationButton" target="home" id="home"/>
			<NavigationButton text="Folders" className="NavigationButton" target="folders" id="folders"/>
			<NavigationButton text="Trash" className="NavigationButton" target="trash" id="trash"/>
			<NavigationButton text="Settings" className="NavigationButton" target="settings" id="settings"/>
		</nav>
	)
}


export default NavigationBar;