import React from 'react'

function Features() {
  return (
    <div className='grid grid-cols-1 mx-4 my-10 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
      <div className='FeatureBox'>
        <img className='FeatureImg' src="https://freshcart.codescandy.com/assets/images/icons/clock.svg" alt="" />
        <h3 className='FeatureHeading'>10 minute grocery now</h3>
        <p className='FeatureP'>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
      </div>
      <div className='FeatureBox'>
        <img className='FeatureImg' src="https://freshcart.codescandy.com/assets/images/icons/gift.svg" alt="" />
        <h3 className='FeatureHeading'>Best Prices & Offers</h3>
        <p className='FeatureP'>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
      </div>
      <div className='FeatureBox'>
        <img className='FeatureImg' src="https://freshcart.codescandy.com/assets/images/icons/package.svg" alt="" />
        <h3 className='FeatureHeading'>Wide Assortment</h3>
        <p className='FeatureP'>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
      </div>
      <div className='FeatureBox'>
        <img className='FeatureImg ' src="https://freshcart.codescandy.com/assets/images/icons/refresh-cw.svg" alt="" />
        <h3 className='FeatureHeading'>Easy Returns</h3>
        <p className='FeatureP'>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
      </div>
    </div>
  )
}

export default Features
