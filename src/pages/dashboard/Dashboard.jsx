import React from 'react';
import CustomCard from "../../components/CustomCard/CustomCard.jsx";

function Dashboard() {
    return (
        <div>
            <div className="flex flex-row gap-5">
                <CustomCard width="w-1/3" header="Income"/>
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