"use client"

import { DashboardProps, Card } from ".";

import { Icons } from "@/components/icons";
import { generateUniformColors } from "@/lib";

import React, { type FC, useMemo } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line, CartesianGrid, Legend } from 'recharts';

export const Plots: FC<DashboardProps> = ({ loading, data }) => {

  const datas = useMemo(() => {
    const colors = generateUniformColors(4, 0.75)
    return [{
      name: "草稿",
      value: data?.draft,
      color: colors[0],
    }, {
      name: "帖子",
      value: data?.post,
      color: colors[1],
    }, {
      name: "图片",
      value: data?.picture,
      color: colors[2],
    }, {
      name: "音乐",
      value: data?.audio,
      color: colors[3],
    }]
  }, [data]);


  return <Card title="统计图" loading={loading} icon={<Icons.Dashboard />}>
    <div className="min-h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%" className={"h-full min-h-[300px]"}>
        <BarChart width={730} height={250} data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: '类别', position: 'insideBottomRight', offset: 0 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {
              datas.map((data, index) => {
                return <Cell key={`cell-${data.name}-${index}`} fill={data.color} />
              })
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>;
};
export default Plots
