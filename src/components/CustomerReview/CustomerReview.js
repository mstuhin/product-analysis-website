import React from 'react';
import man from '../images/man1.jpg'
import man2 from '../images/man2.jpg'
import man3 from '../images/man3.jpg'
import './CustomerReview.css'

const CustomerReview = () => {
    return (
        <div>
            <div className='customer-review'>
                <img src={man} alt="" />
                <h1>Md.Arob Ali</h1>
                <p>I am very happy that Apple Watch BD has given me the item of my choice very quickly.
                    Good luck for Aman online shopping, and we want other online shopping guys to see good service according to them.
                    I had ordered another one before but the quality of their product is not good. So I don't give them any more orders.
                </p>
                <p>Rating 4.3</p>
            </div>

            <div className='customer-review'>
                <img src={man2} alt="" />
                <h1>Md.Ajgor Ali</h1>
                <p>I am very happy that Apple Watch BD has given me the item of my choice very quickly.
                    Good luck for Aman online shopping, and we want other online shopping guys to see good service according to them.
                </p>
                <p>Rating 3.5</p>
            </div>

            <div className='customer-review'>
                <img src={man3} alt="" />
                <h1>Md.Araf Khan</h1>
                <p>I am very happy that Apple Watch BD has given me the item of my choice very quickly.
                    Good luck for Aman online shopping, and we want other online shopping guys to see good service according to them.
                    I had ordered another one before but the quality of their product is not good. So I don't give them any more orders.
                </p>
                <p>Rating 5.0</p>
            </div>
        </div>
    );
};

export default CustomerReview;