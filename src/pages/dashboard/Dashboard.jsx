import React from 'react';
import CustomCard from "../../components/CustomCard/CustomCard.jsx";
import IncomeCard from "../../components/IncomeCard.jsx";

function Dashboard() {
    return (
        <div>
            <div className="flex flex-row gap-5">
                <IncomeCard/>
                <CustomCard width="w-1/3" header="Spendings"/>
                <CustomCard width="w-1/4" header="Expenses"/>
            </div>
            <div className="flex flex-row">
                <CustomCard width="w-1/2" header="Recent Actions"/>
                <CustomCard width="w-1/2" header="Future Actions"/>
            </div>
        </div>
    );
}

export default Dashboard;