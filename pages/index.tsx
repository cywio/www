import type { GetStaticPropsResult, NextPage } from 'next'
import type { SourceDataType } from '@types'
import { useContext, useEffect } from 'react'
import { Container } from '@components'
import { GlobalContext } from '@state'
import axios from 'axios'

export const getStaticProps = async (): Promise<GetStaticPropsResult<SourceDataType>> => {
	let { data } = await axios.get(process.env.DATA_SOURCE as string)

	return {
		props: { ...data },
		revalidate: 86400,
	}
}

const Home: NextPage<SourceDataType> = (props) => {
	const { setData, setSpotify } = useContext(GlobalContext)

	const getSpotifyData = async () => {
		let { data } = await axios.get('/api/spotify')
		setSpotify(data)
	}

	useEffect(() => {
		setData(props)
		getSpotifyData()
	}, [])

	return <Container></Container>
}

export default Home
