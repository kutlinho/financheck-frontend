const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const item = payload[0];
    const data = item.payload; // expenseData'daki obje: { name, value, color }

    return (
        <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-md text-sm">
      <span
          className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
          style={{ background: data.color }}
      />
            <span className="text-gray-500">{data.name}:</span>
            <span className="font-medium text-gray-800">%{item.value}</span>
        </div>
    );
};


export default CustomTooltip;