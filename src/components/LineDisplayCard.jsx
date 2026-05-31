import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid} from "recharts";
import CustomCard from "./CustomCard/CustomCard.jsx";
function LineDisplayCard({type,data}) {
    return (
        <CustomCard header={type} width="w-1/3 h-1/3">
                <div className="flex gap-5">
                    <p className="text-5xl font-medium text:--color-text-dark">₺84.200</p>
                    <span
                        className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800 mt-1">
                    <i className="pi pi-arrow-up"/> +12.4% geçen aya göre
                    </span>
                </div>
                <div className="mt-3 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{top: 6, right: 8, left: -18, bottom: 0}}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false}/>
                            <XAxis dataKey="month" tick={{fontSize: 10, fill: "var(--color-text-dark)"}} axisLine={false}
                                   tickLine={false}/>
                            <YAxis tickFormatter={v => "₺" + v / 1000 + "k"} tick={{fontSize: 10, fill: "var(--color-text-dark)"}}
                                   axisLine={false} tickLine={false}/>
                            <Tooltip formatter={v => ["₺" + v.toLocaleString("tr-TR"), "Gelir"]}/>
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#378ADD"
                                strokeWidth={2}
                                fill="rgba(55,138,221,0.08)"
                                dot={{r: 5, fill: "#378ADD", strokeWidth: 0}}
                                activeDot={{r: 7}}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
        </CustomCard>
    );
}

export default LineDisplayCard;