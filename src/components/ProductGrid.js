import React from 'react'

function ProductGrid() {
    return (
        <div className='product-grid'>
            <h3>RENEW, NOURISH + HYDRATE</h3>
            <h2>R+CO HAIR TREATMENTS</h2>    
            <div className='product-grid__container'>
                <div className='product-grid-item large'>
                    <div className='product-item-large-image'></div>
                    <div className='general-title'>ON A CLOUD COLLECTION</div>
                    <p>Infused with Baobab Oil for intense repair.</p>
                    <div className='call-to-action'>SHOP NOW</div>
                </div>
                <div className='product-grid-small-container'>
                    <div className='product-grid-item small'>
                        <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/files/teacup-2_41f9e687-e050-4353-899d-ec6d2c1437b8_1200x.jpg?v=1647898118' alt='' />
                        <div className='product-small-grid-item'>
                            <div className='general-title'>TEACUP</div>
                            <p>PEACHOLINE + KOMBUCHA DETOX RINSE</p>
                            <div className='call-to-action'>SHOP NOW</div>
                        </div>
                    </div>
                    <div className='product-grid-item small'>
                        <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/files/gemstone-gloss-1-square_1200x.jpg?v=1647897740' alt='' />
                        <div className='product-small-grid-item'>
                            <div className='general-title'>GEMSTONE</div>
                            <p>ULTRA SHINE GLOSSING TREATMENT</p>
                            <div className='call-to-action'>SHOP NOW</div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ProductGrid
