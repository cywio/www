import { GlobalContext } from '@state'
import { useContext } from 'react'
import Image from 'next/image'

export const SpotifyStatus = () => {
	const { data, spotify } = useContext(GlobalContext)

	return spotify ? (
		<a
			rel='noopener noreferrer'
			target='_blank'
			href={`https://open.spotify.com/track/${spotify.id}`}
			className='mt-4 md:mt-0 bar curosr-pointer flex items-center gap-3 group hover:text-black'
		>
			<img className='hidden group-hover:block' width={28} src={data?.spotify.emotes[0]} />
			<div
				//@ts-ignore
				style={{ '--spotifyProgressBarWidth': `${spotify.progress * 100}%` }}
				className='flex items-center gap-3 flex-row-reverse justify-end md:flex-row spotify-progress-bar'
			>
				<p className='lg:max-w-[460px] max-w-[350px] truncate'>
					Listening to <b>{spotify.title}</b> by {spotify.artists.join(', ')}
				</p>
				<Image src={spotify.artwork} width={28} height={28} className='rounded' unoptimized />
			</div>
		</a>
	) : null
}
