import React from 'react';
import CustomCard from "../../components/CustomCard/CustomCard.jsx";
import IncomeCard from "../../components/IncomeCard.jsx";
import SpendingsCard from "../../components/SpendingsCard.jsx";
import ExpensesCard from "../../components/ExpensesCard.jsx";

function Dashboard() {
    return (
        <div>
            <div className="flex flex-row gap-5">
                <IncomeCard/>
                <SpendingsCard/>
                <ExpensesCard/>
            </div>
            <div className="flex flex-row">
                <CustomCard width="w-1/2" header="Recent Actions"/>
                <CustomCard width="w-1/2" header="Future Actions"/>
            </div>
        </div>
    );
}

export default Dashboard;