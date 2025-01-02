import React from 'react';
import loader from '../../assets/others/loader3.gif'

const Loading = () => {
    return (
        <div className='min-h-screen justify-center items-center flex'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Loading;