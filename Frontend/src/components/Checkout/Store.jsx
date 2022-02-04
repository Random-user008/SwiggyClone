import React from 'react';
import appStore from '../../Images/appStore.png'
import googlePlay from '../../Images/googlePlay.png'
const Store = () => {
    return (
        <div className='store'>
            <a href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"><img src={appStore} alt="" /></a>
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN&gl=US"><img src={googlePlay} alt="" /></a>
            
        </div>
    );
};

export default Store;