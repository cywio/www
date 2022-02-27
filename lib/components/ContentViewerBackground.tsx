import { useContext } from 'react'
import { GlobalContext } from '@state'
import dynamic from 'next/dynamic'
import cx from 'classnames'

const GoL = dynamic(() => import('./GameOfLife'), { ssr: false })

export const ContentViewerBackground = () => {
	const { contentView, data } = useContext(GlobalContext)

	return (
		<>
			<div
				data-animate-grid={contentView ? '' : null}
				className={cx('bg-[url(/img/grid.svg)] w-full bg-repeat bg-center absolute', {
					['h-screen']: !contentView,
					['h-[8vh] md:h-[14vh]']: contentView,
				})}
			/>
			{!contentView ? <GoL speed={data?.gameOfLife.speed} cubeSize={data?.gameOfLife.cubeSize} /> : null}
		</>
	)
}
