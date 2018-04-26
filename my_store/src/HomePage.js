import React from 'react';
import LogInBtn from './LogInBtn';
import HomeCategoriesMenu from './HomeCategoriesMenu';

let HomePage = () => 
    <div>
        <img className='home-img' src="https://res.cloudinary.com/trioangle/image/upload/huxwlfrfrtuhnsjdvs4m" alt='my_store'/>
        <div className='home-txt'>WELCOME to MY_STORE</div>
        <LogInBtn classN='login'/>
        <HomeCategoriesMenu/>
    </div>

export default HomePage;