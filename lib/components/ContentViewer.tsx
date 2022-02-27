import { ContentViewerItem, ContentViewerBackground } from '@components'
import { GlobalContext } from '@state'
import { useContext } from 'react'
import cx from 'classnames'

export const ContentViewer = () => {
	const { data, contentView, setContentView } = useContext(GlobalContext)

	const contentViewData = data?.content.find((i) => i.name === contentView)

	return (
		<div className='border-inherit md:w-1/2 2xl:w-2/3 overflow-auto' style={{ zIndex: 1, overflow: !contentView ? 'hidden' : '' }}>
			<div className='flex flex-col border-inherit'>
				<div
					className={cx('relative border-inherit', {
						['h-screen md:h-[14vh]']: !contentView,
						['mt-12 sm:mt-0 h-[8vh] md:h-[14vh]']: contentView,
					})}
				>
					{contentView && (
						<div className='z-10'>
							<p
								onClick={() => setContentView(null)}
								className='absolute top-2 lg:top-14 right-2 text-4xl opacity-40 z-50 hover:opacity-70 cursor-pointer'
							>
								✗
							</p>
						</div>
					)}
					<h1 className='mt-[calc(2vh)] md:mt-[calc(8vh)] z-10 ml-6 font-vorkurs text-3xl capitalize absolute'>{contentView}</h1>
					<ContentViewerBackground />
				</div>
				{contentView && (
					<div className='border-t border-inherit'>
						<div className='p-6 py-12 max-w-[1000px] mx-auto'>
							{contentViewData?.data.map((i) => (
								<ContentViewerItem data={i} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
