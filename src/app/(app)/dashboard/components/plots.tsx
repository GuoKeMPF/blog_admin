'use client'

import { DashboardProps, Card } from '.'

import { Icons } from '@/components/icons'
import { generateUniformColors } from '@/lib'

import React, { type FC, useMemo, Fragment } from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LineChart,
    Line,
    CartesianGrid,
    Legend,
    PieChart,
    Pie,
    LabelList,
} from 'recharts'

const RADIAN = Math.PI / 180

type RenderCustomizedLabelProps = {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    percent: number
    index: number
    value: number
}

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: RenderCustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

export const Plots: FC<DashboardProps> = ({ loading, data }) => {
    const datas = useMemo(() => {
        const colors = generateUniformColors(4, 0.75)
        return [
            {
                name: '草稿',
                value: data?.draft,
                color: colors[0],
            },
            {
                name: '帖子',
                value: data?.post,
                color: colors[1],
            },
            {
                name: '图片',
                value: data?.picture,
                color: colors[2],
            },
            {
                name: '音乐',
                value: data?.audio,
                color: colors[3],
            },
        ]
    }, [data])

    return (
        <Card title="统计图" loading={loading} icon={<Icons.Dashboard />}>
            <div className="min-h-[300px] w-full">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                    className={'h-full min-h-[300px]'}
                >
                    <BarChart width={730} height={250} data={datas}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            label={{
                                value: '类别',
                                position: 'insideBottomRight',
                                offset: 0,
                            }}
                        />
                        <YAxis />
                        <Tooltip
                            formatter={(value, _name, props) => {
                                return [value, props.payload.name]
                            }}
                        />
                        <Bar dataKey="value">
                            {datas.map((data, index) => {
                                return (
                                    <Fragment
                                        key={`cell-${data.name}-${index}`}
                                    >
                                        <Cell fill={data.color} />
                                    </Fragment>
                                )
                            })}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="min-h-[300px] w-full">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                    className={'h-full min-h-[300px]'}
                >
                    <PieChart width={400} height={400}>
                        <Tooltip
                            formatter={(value, _name, props) => {
                                return [value, props.payload.name]
                            }}
                        />

                        <Legend verticalAlign="bottom" height={36} />
                        <Pie
                            data={datas}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {datas.map((data, index) => (
                                <Fragment key={`cell-${data.name}-${index}`}>
                                    <Cell fill={data.color} />
                                </Fragment>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}
export default Plots
