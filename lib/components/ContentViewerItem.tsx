import { ReactElement } from 'react'
import { SourceDataType } from '@types'
import Image from 'next/image'

type ImageType = SourceDataType['content'][number]['data'][number]['images'][number]

export const ContentViewerItem = ({ data: i }: { data: any }) => {
	function formatTimeline(timeline: Array<Date | null>): ReactElement<HTMLSpanElement> {
		let from = new Date(String(timeline[0])).getFullYear()
		let to = new Date(String(timeline[1])).getFullYear()
		return <span className='float-right text-xs opacity-40 ml-2'>{`${from}${!to ? '' : ` — ${to}`}`}</span>
	}

	return (
		<div className='border-b border-dotted last:border-none border-gray-400 pb-6 mb-6'>
			{i?.images.length !== 0 && (
				<div className='snap-x flex items-center gap-4 mb-4 overflow-auto'>
					{i?.images?.map((i: ImageType) => (
						<div key={i.src} className='snap-center relative group min-w-[600px] border rounded'>
							<Image className='w-full aspect-video' src={i.src} alt={String(i.alt)} width={1280} height={720} unoptimized />
							{i.alt && (
								<span className='transition opacity-0 group-hover:opacity-100 text-xs p-1.5 px-2 absolute top-0 left-0 m-4 shadow rounded-full bg-white'>
									{i.alt}
								</span>
							)}
						</div>
					))}
				</div>
			)}
			<h3>
				<a className='font-bold' rel='noopener noreferrer' target='_blank' href={i.url}>
					{i.title}
				</a>
				{formatTimeline(i.timeline)}
			</h3>
			<p className='mt-3'>{i.description}</p>
		</div>
	)
}
