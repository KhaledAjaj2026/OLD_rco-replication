import React from 'react'
// import $ from 'jquery'

// $(document).jQuery(function() {
//     let elem = document.getElementById("scroll");
//     let pos = (elem.getBoundingClientRect());
//     let move = pos.y - 145;
//     let position = window.scrollY;

//     console.log(move);
//     console.log(position);


// });

function ProductScroll() {
    return (
        <div className='product-scroll__container'>
            <div className='general-title' id='scroll'>100% vegan formulas</div>
            <p>All R+Co products are <span>Leaping Bunny Certified</span> + formulated without Parabens, Sulfates, Petrolatum, or Mineral Oil.</p>
            <div id='scroll-container'>
                <div className='scroll-product'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/r_coweb_velvet-curtain-cotton-touch-texture-balm_340x340.png?v=1628880126' alt='' />
                </div>
                <div className='scroll-product'>
                    <img  id='green-capsule' src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/bTg4nLow_340x340.png?v=1635274154' alt='' />
                </div>
                <div className='scroll-product'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/R_Co_WebAssets2021_SUPER-GARDEN-CBD-Conditioner_340x340.png?v=1632358665' alt='' />
                </div>
                <div className='scroll-product'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/R_Co_WebAssets2021_ON-A-CLOUD-Baobab-Oil-Repair-Shampoo_340x340.png?v=1632357174' alt='' />
                </div>
                <div className='scroll-product'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/INGENIOUS-THICKENING-MASQUE_340x340.png?v=1635343935' alt='' />
                </div>
                <div className='scroll-product'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/R_Co_NewWebAssets-COOL-WIND_340x340.png?v=1632367848' alt='' />
                </div>
                <div className='scroll-product'>
                    <img src='https://cdn.shopify.com/s/files/1/0576/7888/9155/products/r_co-bleu_featherlighthairspray_340x340.png?v=1633205374' alt='' />
                </div>
            </div>
        </div>
    )
}

export default ProductScroll
