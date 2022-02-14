import type { SourceDataType, SpotifySourceType, GlobalContextDefaultValueType } from '@types'
import type { AppProps } from 'next/app'
import { GlobalContext } from '@state'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	const [spotify, setSpotify] = useState<SpotifySourceType>()
	const [data, setData] = useState<SourceDataType>()

	return (
		<GlobalContext.Provider value={{ spotify, setSpotify, data, setData } as GlobalContextDefaultValueType}>
			<Component {...pageProps} />
		</GlobalContext.Provider>
	)
}

export default MyApp
