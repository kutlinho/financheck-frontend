import React from 'react';
import LineDisplayCard from "./LineDisplayCard.jsx";

function IncomeCard() {
    const incomeData = [
        {month: "Ocak", value: 71000},
        {month: "Şubat", value: 75000},
        {month: "Mart", value: 84200},
    ];

    return (
        <LineDisplayCard type="Income" data={incomeData} />
    );
}

export default IncomeCard;

