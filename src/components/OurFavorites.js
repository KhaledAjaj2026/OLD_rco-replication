import React from 'react'

function OurFavorites() {
    return (
        <div className='favorites-container'>
            <h2 className='general-title'>Our Favorites</h2>
            <div className='favorites-row'>
                <div className='favorites-card'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/files/2.Shampoo_Conditioners_Model_960x1200_V2_960x.jpg?v=1632939549' alt='' />
                    <div className='general-title'>Shampoo + Conditioner</div>
                </div>
                <div className='favorites-card'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/files/4.Styling_Model_960x1200_V2_960x.jpg?v=1632939528' alt='' />
                    <div className='general-title'>Styling</div>
                </div>
                <div className='favorites-card'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/files/5.Treatments_Model_960x1200_V2_960x.jpg?v=1632939473' alt='' />
                    <div className='general-title'>Treatments</div>
                </div>
            </div>
        </div>
    )
}

export default OurFavorites
