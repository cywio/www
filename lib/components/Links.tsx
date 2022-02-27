import { NavItem } from '@components'
import { GlobalContext } from '@state'
import { useContext, useState } from 'react'
import copy from 'copy-to-clipboard'

export const Links = () => {
	const { data } = useContext(GlobalContext)

	const [copyState, setCopyState] = useState(false)

	function copyEmail() {
		copy(data?.email as string)
		setCopyState(true)
		setTimeout(() => setCopyState(false), 2000)
	}

	return (
		<div className='flex flex-col mt-3 border-t border-[#aab8b8] pt-6'>
			{data?.links.map((link) => (
				<NavItem href={link.href}>{link.title}</NavItem>
			))}
			<NavItem onClick={() => copyEmail()} isActive={copyState}>
				{copyState ? 'Copied to clipboard!' : 'Email'}
			</NavItem>
		</div>
	)
}
