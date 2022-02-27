import { GlobalContext } from '@state'
import { useContext } from 'react'

export const ContentViewerBackground = () => {
	const { contentView } = useContext(GlobalContext)

	return (
		<div
			data-animate-grid={contentView ? '' : null}
			className='bg-[url(/img/grid.svg)] h-full w-full bg-repeat bg-center absolute'
		></div>
	)
}
