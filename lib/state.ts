import { GlobalContextDefaultValueType, SourceDataType, SpotifySourceType } from '@types'
import { createContext, SetStateAction } from 'react'

export const GlobalContext = createContext<GlobalContextDefaultValueType>({
	spotify: null,
	setSpotify: () => ({} as SetStateAction<SpotifySourceType>),
	data: null,
	setData: () => ({} as SetStateAction<SourceDataType>),
	contentView: '',
	setContentView: () => '',
})
