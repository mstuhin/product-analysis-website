import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [dashboards, setDashboard] = useState([]);

    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setDashboard(data));

    }, [])

    return (
        <div>
            <div>

            </div>
        </div>
    );
};

export default Dashboard;