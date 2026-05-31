import {PieChart, Pie, Tooltip, Sector} from "recharts";
import CustomCard from "./CustomCard/CustomCard.jsx";
import CustomTooltip from "./CustomTooltip.jsx";

const expenseData = [
    { name: "Kira",       value: 35, color: "#378ADD" },
    { name: "Personel",   value: 28, color: "#1D9E75" },
    { name: "Pazarlama",  value: 17, color: "#E24B4A" },
    { name: "Teknoloji",  value: 12, color: "#EF9F27" },
    { name: "Diğer",      value: 8,  color: "#888780" },
];

const CustomSlice = (props) => (
     <Sector {...props} fill={expenseData[props.index]?.color} />
);

function ExpensesCard() {

    return (
        <CustomCard bodyClassName="justify-items-center" header="Expenses" width="w-1/4">
            <PieChart style={{ width: '80%', maxWidth: '500px', maxHeight: '25vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={expenseData}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive="true"
                            shape={CustomSlice}
                        />
                        <Tooltip content={CustomTooltip} ani/>
                    </PieChart>
            <div className="flex flex-wrap gap-2 justify-center mt-2 text-xs text-gray-500">
                {expenseData.map(e => (
                    <span key={e.name} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm inline-block" style={{ background: e.color }} />
                        {e.name} {e.value}%
                    </span>
                ))}
            </div>
        </CustomCard>
    );
}

export default ExpensesCard;