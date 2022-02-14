import type { GetStaticPropsResult, NextPage } from 'next'
import type { SourceDataType } from '@types'
import { useContext, useEffect } from 'react'
import { Container, Skills } from '@components'
import { GlobalContext } from '@state'
import axios from 'axios'
import cx from 'classnames'

export const getStaticProps = async (): Promise<GetStaticPropsResult<SourceDataType>> => {
	let { data } = await axios.get(process.env.DATA_SOURCE as string)

	return {
		props: { ...data },
		revalidate: 86400,
	}
}

const Home: NextPage<SourceDataType> = (props) => {
	const { spotify, setData, setSpotify } = useContext(GlobalContext)

	const getSpotifyData = async () => {
		let { data } = await axios.get('/api/spotify')
		setSpotify(data)
	}

	useEffect(() => {
		setData(props)
		getSpotifyData()
	}, [])

	return (
		<Container>
			<div
				className={cx(`p-6 2xl:w-1/3 md:w-1/2 border-b md:border-b-0 md:border-r border-inherit md:overflow-auto relative`, {
					'mt-24 md:mt-12': spotify,
					'mt-12': !spotify,
				})}
			>
				<p>{props.about}</p>
				<div className='py-6'>
					<Skills />
				</div>
			</div>
			<div className='border-inherit md:w-1/2 2xl:w-2/3 overflow-auto'>
				<div className='bg-[url(/img/grid.svg)] h-full w-full bg-repeat bg-center absolute'></div>
			</div>
		</Container>
	)
}

export default Home
