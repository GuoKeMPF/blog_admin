
import { Table } from './components'

import React, { Fragment, type FC } from 'react'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: '数据中心 - 草稿',
  description: '数据中心 - 草稿',
}

type DraftProps = {}

export const Draft: FC<DraftProps> = ({ }) => {


  return (
    <Fragment>
      <Table />
    </Fragment>
  )
}

export default Draft
