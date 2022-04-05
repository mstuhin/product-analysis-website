import React, { useEffect, useState } from 'react';
import './Home.css'
import Apple from '../images/Apple-w09.jpg'

const Home = () => {
    const [homes, setHome] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHome(data));
    }, [])

    return (
        <div className='homes-container'>
            <div className='home-container'>
                <h1> Chooses your smartwatch</h1>
                <p>A smart home will not only show you time, it will also make you smart.</p>
                <button className='btn-color'>Live demo</button>
            </div>
            <div className='home-img'>
                <img src={Apple} alt="" />
            </div>
        </div>
    );
};

export default Home;