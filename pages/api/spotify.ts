import type { NextApiRequest, NextApiResponse } from 'next'
import type { SpotifySourceType } from '@types'
import axios from 'axios'

export default async function (_: NextApiRequest, res: NextApiResponse) {
	try {
		let token: string = await getAuthToken()

		let { data } = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: { Authorization: `Bearer ${token}` },
		})

		if (!data.is_playing) throw null

		res.setHeader('Access-Control-Allow-Origin', '*')

		return res.send({
			id: data.item.id,
			title: data.item.name,
			artwork: data.item.album.images[1].url,
			artists: data.item.artists.map((i: { name: string }) => i.name),
			progress: ~~((data.progress_ms / data.item.duration_ms) * 100) / 100,
		} as SpotifySourceType)
	} catch {
		return res.end()
	}
}

async function getAuthToken() {
	let formData = new URLSearchParams()

	formData.append('grant_type', 'refresh_token')
	formData.append('refresh_token', process.env.SPOTIFY_REFRESH_TOKEN as string)
	formData.append('client_id', process.env.SPOTIFY_CLIENT_ID as string)

	let { data } = await axios.post('https://accounts.spotify.com/api/token', formData, {
		headers: { Authorization: `Basic ${process.env.SPOTIFY_AUTH}` },
	})

	return data.access_token
}
