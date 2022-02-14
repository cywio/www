export interface SourceDataType {
	name: string
	description: string
	about: string
	spotify: {
		enabled: true
		emotes: Array<string>
	}
	projects: Array<{
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
	work: Array<{
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
	skills: {
		languages: Array<string>
		frontend: Array<string>
		backend: Array<string>
		software: Array<string>
		concepts: Array<string>
		misc: Array<string>
	}
	links: Array<{
		title: string
		href: string
	}>
}