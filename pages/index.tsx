import type { GetStaticPropsResult, NextPage } from 'next'
import { SourceDataType } from '@types'
import axios from 'axios'

export const getStaticProps = async (): Promise<GetStaticPropsResult<SourceDataType>> => {
	let { data } = await axios.get(process.env.DATA_SOURCE as string)

	return {
		props: { ...data },
		revalidate: 86400,
	}
}

const Home: NextPage<SourceDataType> = () => {
	return <></>
}

export default Home
