import { Metadata } from 'next/types'
import React, { Fragment, type FC } from 'react'

export const metadata: Metadata = {
    title: '数据中心 - 草稿',
    description: '数据中心 - 草稿',
}

type DraftProps = {}

export const Draft: FC<DraftProps> = ({}) => {
    return <Fragment>Draft</Fragment>
}

export default Draft
