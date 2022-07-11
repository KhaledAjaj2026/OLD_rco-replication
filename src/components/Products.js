import React from 'react'

function Products() {
    return (
        <div className='products-title'>
            <h2 id='product-title' className='general-title'>Top-Rated Bestsellers</h2>
            <div className='products-cards__container'>
                <div className='product'>
                    <div className='product-tile__box'>
                        <img className='product-bottle' src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/R_Co_WebAssets2021_DALLAS-Wash-Kit_340x340.png?v=1632367493' alt='' />
                        <img className='product-bg' src='https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F6842167853251%2F1633202376083%2FDallasShampooBackground.jpg%3Fv%3D0&c_options=w_680' alt='' />
                    </div>
                    <div className='product-details__box'>
                        <h4>Dallas</h4>
                        <p className='product-description'>Biotin Thickening Shampoo + Conditioner Set</p>
                        <p className='product-price'>$64.00</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-tile__box'>
                        <img className='product-bottle' src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/R_Co_WebAssets2021_TELEVISION-Wash-Kit_340x340.png?v=1632367718' alt='' />
                        <img className='product-bg' src='https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F6842186236099%2F1632468589432%2FRCoTELEVISION-Perfect-Hair-Shampoo.png%3Fv%3D0&c_options=w_680' alt='' />
                    </div>
                    <div className='product-details__box'>
                        <h4>Television</h4>
                        <p className='product-description'>Perfect Hair Shampoo + Conditioner Set</p>
                        <p className='product-price'>$64.00</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-tile__box'>
                        <img className='product-bottle' src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/SUN-CATCHER-Power-C-Boosting-Leave-In-Conditioner_340x340.png?v=1632361127' alt='' />
                        <img className='product-bg' src='https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F6842190627011%2F1632468568157%2FSUNCATCHER.jpg%3Fv%3D0&c_options=w_680' alt='' />
                    </div>
                    <div className='product-details__box'>
                        <h4>Sun Catcher</h4>
                        <p className='product-description'>Power C Boosting Leave-in Conditioner</p>
                        <p className='product-price'>$32.00</p>
                    </div>
                </div>
                <div className='product'>
                    <div className='product-tile__box'>
                        <img className='product-bottle' src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/R_Co_WebAssets2021_HIGH-DIVE-Moisture-_-Shine-Creme_340x340.png?v=1642641957' alt='' />
                        <img className='product-bg' src='https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F6842192593091%2F1632468451845%2FHIGH-DIVE.jpg%3Fv%3D0&c_options=w_680' alt='' />
                    </div>
                    <div className='product-details__box'>
                        <h4>High Dive</h4>
                        <p className='product-description'>Moisture + Shine Créme</p>
                        <p className='product-price'>$32.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
