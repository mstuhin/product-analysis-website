import React, { useEffect, useState } from 'react';

const Home = () => {
    const [homes, setHome] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHome(data));
    }, [])

    return (
        <div>
            <div>
                <h1>Chooses your smartwatch</h1>
                <p>A smart home will not only show you time, it will also make you smart.</p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Home;