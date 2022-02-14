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
				<a
					data-has-arrow
					href={link.href}
					target='_blank'
					rel='noopener noreferrer'
					className='hover:underline cursor-pointer text-xl mb-3'
				>
					{link.title}
				</a>
			))}
			<a
				data-has-arrow
				onClick={() => copyEmail()}
				className={`hover:underline cursor-pointer text-xl mb-3 ${copyState ? 'text-[#ec7631]' : ''}`}
			>
				{copyState ? 'Copied to clipboard!' : 'Email'}
			</a>
		</div>
	)
}
