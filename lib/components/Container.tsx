import type { GlobalContextDefaultValueType } from '@types'
import { NextComponentType } from 'next'
import { GlobalContext } from '@state'
import { Header } from '@components'
import { useContext } from 'react'

export const Container: NextComponentType = ({ children }) => {
	const { data } = useContext<GlobalContextDefaultValueType>(GlobalContext)

	return (
		<main className='relative w-screen h-screen p-12 border-[#aab8b8]'>
			<div className='hidden sm:block absolute border-t border-r border-inherit left-0 bottom-0 p-[14px] h-7 w-7' />
			<div className='hidden sm:block absolute border-t border-l border-inherit right-0 bottom-0 p-[14px] h-7 w-7' />
			<div className='hidden sm:block absolute border-b border-r border-inherit left-0 top-0 p-[14px] h-7 w-7' />
			<div className='hidden sm:block absolute border-b border-l border-inherit right-0 top-0 p-[14px] h-7 w-7' />
			<div className='flex flex-col md:flex-row border border-inherit absolute bg-[#e7e9ee] inset-0 sm:inset-7'>
				<Header title={data?.name} description={data?.description} />
				{children}
			</div>
		</main>
	)
}
