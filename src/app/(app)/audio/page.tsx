import { Table } from './components'

import { Metadata } from 'next/types'
import React, { Fragment, type FC } from 'react'

export const metadata: Metadata = {
	title: '数据中心 - 音频',
	description: '数据中心 - 音频',
}

export const Audio: FC = async () => {
	return (
		<Fragment>
			<Table />
		</Fragment>
	)
}
export default Audio
