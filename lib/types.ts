import { SetStateAction } from 'react'

export interface SourceDataType {
	name: string
	description: string
	about: string
	spotify: {
		enabled: true
		emotes: Array<string>
	}
	content: Array<{
		name: string
		data: Array<{
			title: string
			description: string
			timeline: Array<Date | null>
			url: string
			repo: string
			images: Array<{
				src: string
				alt: string | null
			}>
		}>
	}>
	skills: {
		description: string
		lists: Array<{
			name: string
			list: Array<string>
		}>
	}
	links: Array<{
		title: string
		href: string
	}>
	email: string
}

export interface SpotifySourceType {
	title: string
	progress: number
	artwork: string
	artists: Array<string>
	id: string
}

export interface GlobalContextDefaultValueType {
	spotify: SpotifySourceType | null
	setSpotify(props: SpotifySourceType): SetStateAction<SpotifySourceType>
	data: SourceDataType | null
	setData(props: SourceDataType): SetStateAction<SourceDataType>
	contentView: string
	setContentView(props: string | null): SetStateAction<string | null>
}
