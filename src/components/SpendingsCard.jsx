import React from 'react';
import LineDisplayCard from "./LineDisplayCard.jsx";

function ExpensesCard() {

    const expensesData = [
        {month: "Ocak", value: 52000},
        {month: "Şubat", value: 49000},
        {month: "Mart", value: 66230},
    ];

    return (
        <LineDisplayCard type="Spendings" data={expensesData} />
    );
}

export default ExpensesCard;