'use client'

import { Button, Slider } from '@/components/ui'

import { Icons } from '@/components/icons'

import { Fragment, useState, useEffect, useRef } from 'react'

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
	const [progress, setProgress] = useState<[number, number]>([0, 0])

	const [volume, setVolume] = useState<[number, number]>([60, 60])

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
		const precent = (e.target.currentTime / e.target.duration) * 100
		setProgress([precent, precent])
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
		setProgress([0, 0])
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

	const onChangeProgress = (value: [number, number]) => {
		if (audio.current) {
			const currentTime = (audio.current.duration * value[0]) / 100
			audio.current.currentTime = currentTime
			setProgress(value)
		}
	}

	const onChangeVolume = (value: [number, number]) => {
		if (audio.current) {
			audio.current.volume = value[0] / 100
			setVolume(value)
		}
	}

	return (
		<Fragment>
			<div>
				<Button onClick={onBackward}>
					<Icons.Backward />
				</Button>
				<Button onClick={onPlay} loading={loading} disabled={loadingError}>
					<Icons.CaretRight />
				</Button>
				<Button onClick={onPause}>
					<Icons.Pause />
				</Button>
				<Button onClick={onStop}>
					<Icons.Border />
				</Button>
				<Button onClick={onForward}>
					<Icons.Forward />
				</Button>
			</div>
			{src && (
				<div>
					<div className={'flex flex-wrap'}>
						<div className={'min-w-[300px]'}>{name || '--'}</div>
						<div className={'flex'}>
							<span>
								<Icons.Sound />
							</span>
							<Slider
								className={'w-[300px]'}
								value={volume}
								onValueChange={onChangeVolume}
							/>
						</div>
					</div>
					<Slider value={progress} onValueChange={onChangeProgress} />
					<div className={'hidden'}>
						<audio src={src} ref={audio} />
					</div>
				</div>
			)}
		</Fragment>
	)
}
