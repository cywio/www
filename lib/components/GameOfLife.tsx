import { useEffect, useRef, useState } from 'react'

interface dimensions {
	readonly width: number
	readonly height: number
}

interface GOLProps {
	speed?: number
	cubeSize?: number
}

export default function GoL({ speed = 100, cubeSize = 8 }: GOLProps) {
	const [gol, setGol] = useState<Array<Array<number>>>([])
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const { width, height }: dimensions = { width: window.screen.availWidth, height: window.screen.availHeight }

	useEffect(() => {
		setup()
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas?.getContext('2d')
		if (context && gol.length) setTimeout(() => next(context), speed)
	}, [gol])

	function setup() {
		let temp: Array<Array<number>> = [...gol]

		for (let i = 0; i <= height + 2; i++) {
			temp[i] = []
			for (let j = 0; j <= width + 2; j++) {
				temp[i][j] = ~~(Math.random() * 2)
			}
		}

		setGol([...temp])
	}

	function next(context: CanvasRenderingContext2D) {
		let temp: Array<Array<number>> = [...gol]

		context.fillStyle = '#e7e9ee'
		context.fillRect(0, 0, width, height)

		for (let i = 0; i <= height + 2; i++) {
			temp[i] = []
			for (let j = 0; j <= width + 2; j++) temp[i][j] = 0
		}

		for (let i = 1; i <= height + 1; i++) {
			for (let j = 1; j <= width + 1; j++) {
				let sum =
					gol[i - 1][j] +
					gol[i - 1][j - 1] +
					gol[i - 1][j + 1] +
					gol[i][j - 1] +
					gol[i][j + 1] +
					gol[i + 1][j] +
					gol[i + 1][j + 1] +
					gol[i + 1][j - 1]

				if (gol[i][j] == 1) {
					if (sum === 2 || sum === 3) {
						temp[i][j] = 1
						context.fillStyle = '#babbbf'
						draw(context, i, j)
					}
				} else {
					if (sum === 3) {
						temp[i][j] = 1
						context.fillStyle = '#d2d4d9'
						draw(context, i, j)
					}
				}
			}
		}

		setGol([...temp])
	}

	function draw(context: CanvasRenderingContext2D, x: number, y: number) {
		context.fillRect(cubeSize * (x - 1), cubeSize * (y - 1), cubeSize, cubeSize)
	}

	return <canvas height={height} width={width} ref={canvasRef} />
}
