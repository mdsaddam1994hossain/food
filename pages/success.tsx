import React from 'react';

const SuccessPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col '>
            <p><span className='text-2xl text-green-700'>Thank you!</span> Order Successfully completed.</p> 
            <button className='bg-green-700 text-white py-2 px-8 mt-2 rounded-full'>Track order</button>     
        </div>
    );
};

export default SuccessPage;