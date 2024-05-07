'use client'

import { Button, Card, CardContent, CardHeader, CardTitle, Slider } from '@/components/ui'

import { Icons } from '@/components/icons'

import { useState, useEffect, useRef } from 'react'

import type { FC } from 'react'

type PlayerProps = {
	src: string | undefined
	name: string | undefined
	onReset: () => void
	onSwitch: (step: 1 | -1) => void
}

export const Player: FC<PlayerProps> = ({ src, name, onReset, onSwitch }) => {
	const audio = useRef<HTMLAudioElement>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [loadingError, setLoadingError] = useState<boolean>(false)
	const [progress, setProgress] = useState<[number]>([0])

	const [volume, setVolume] = useState<[number]>([50])

	const onLoad = () => {
		setLoading(false)
		setLoadingError(false)
		audio.current?.play()
	}

	const onError = () => {
		setLoadingError(true)
		setLoading(false)
	}

	const onProgress = (e: any) => {
		const percent = (e.target.currentTime / e.target.duration) * 100
		setProgress([percent])
	}

	const onEnd = () => {
		onSwitch(1)
	}

	useEffect(() => {
		if (audio.current && src) {
			audio.current.src = src
			setLoading(true)
			audio.current.preload = 'auto'
			audio.current.oncanplay = onLoad
			audio.current.onerror = onError
			audio.current.ontimeupdate = onProgress
			audio.current.onended = onEnd
			audio.current.volume = volume[0] / 100
		}
	}, [src, name])

	const onPlay = () => {
		audio.current?.play()
	}

	const onStop = () => {
		audio.current?.pause()
		onReset()
		setProgress([0])
	}

	const onPause = () => {
		audio.current?.pause()
	}

	const onBackward = () => {
		onSwitch(-1)
	}

	const onForward = () => {
		onSwitch(1)
	}

	const onChangeProgress = (value: [number]) => {
		if (audio.current) {
			const currentTime = (audio.current.duration * value[0]) / 100
			audio.current.currentTime = currentTime
			setProgress(value)
		}
	}

	const onChangeVolume = (value: [number]) => {
		if (audio.current) {
			audio.current.volume = value[0] / 100
			setVolume(value)
		}
	}

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-md font-semibold">
					<Button onClick={onBackward} variant="outline" size="icon">
						<Icons.Backward />
					</Button>
					<Button onClick={onPlay} variant="outline" size="icon" loading={loading} disabled={loadingError}>
						<Icons.CaretRight />
					</Button>
					<Button onClick={onPause} variant="outline" size="icon">
						<Icons.Pause />
					</Button>
					<Button onClick={onStop} variant="outline" size="icon">
						<Icons.Border />
					</Button>
					<Button onClick={onForward} variant="outline" size="icon">
						<Icons.Forward />
					</Button>
				</CardTitle>
			</CardHeader>


			{src && (<CardContent className='flex flex-col gap-4'>
				<div className={'flex flex-wrap items-center gap-4'}>
					<div className={'min-w-[300px]'}>{name || '--'}</div>
					<Icons.Sound />
					<Slider
						className={'w-[300px]'}
						value={volume}
						onValueChange={onChangeVolume}
					/>
				</div>
				<Slider value={progress} onValueChange={onChangeProgress} />
				<div className={'hidden'}>
					<audio src={src} ref={audio} />
				</div>
			</CardContent>
			)}
		</Card>
	)
}
