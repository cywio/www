import type { GlobalContextDefaultValueType } from '@types'
import { GlobalContext } from '@state'
import { useContext } from 'react'

export const Skills = () => {
	const { data } = useContext<GlobalContextDefaultValueType>(GlobalContext)

	return (
		<details>
			<summary className='hover:underline cursor-pointer text-xl mb-3 font-vulkors'>Skills</summary>
			<p className='mb-3'>{data?.skills.description}</p>
			<div className='my-4'>
				{data?.skills?.lists?.map(({ name, list }) => (
					<div key={name} className='group overflow-auto'>
						<div className='flex lg:flex-row flex-col items-start lg:items-center gap-3 pb-2'>
							<div className='flex items-center w-full gap-3'>
								<p className='min-w-max font-bold'>
									<em>{name}</em>
								</p>
								<div className='h-1 w-full border-b border-dotted border-gray-500' />
							</div>
							<p className='min-w-max font-bold'>{list.join(', ')}</p>
						</div>
					</div>
				))}
			</div>
		</details>
	)
}
