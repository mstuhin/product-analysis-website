import React, { useEffect, useState } from 'react';
import './Home.css'
import Apple from '../images/Apple-w09.jpg'
import CustomerReview from '../CustomerReview/CustomerReview'

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

            </div>
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

            <div className='review-3'>
                <h1>Customer Reviews (3)</h1>

            </div>
            <div>
                {<CustomerReview></CustomerReview>}
            </div>
            <div>
                <button>See all Reviews</button>
            </div>
        </div>

    );
};

export default Home;