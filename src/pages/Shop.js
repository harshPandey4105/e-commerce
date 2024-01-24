import React, { useState } from 'react';
import Hero from '../components/Hero';
import Popular from '../components/popular';
import Offers from '../components/offers';
import Newcollections from '../components/Newcollections';
import Newsletter from '../components/Newsletter';
const Shop=()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollections/>
            <Newsletter/>
        </div>
    )
}

export default Shop;