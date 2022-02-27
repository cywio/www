import { SpotifyStatus } from '@components'
import { GlobalContext } from '@state'
import { useContext } from 'react'
import Link from 'next/link'

export const Header = ({ title, description }: { title?: string; description?: string }) => {
	const { data } = useContext(GlobalContext)

	return (
		<div className='z-10 overflow-auto p-3 px-6 bg-inherit border-b border-inherit top-0 left-0 fixed sm:absolute w-full flex flex-col md:flex-row md:items-center md:justify-between'>
			<div className='flex items-center gap-3'>
				<Link href='/'>
					<a className='font-vorkurs text-lg hover:underline min-w-max flex items-center gap-4'>{title}</a>
				</Link>
				<p className='opacity-50'>{description}</p>
			</div>
			{data?.spotify.enabled && <SpotifyStatus />}
		</div>
	)
}
