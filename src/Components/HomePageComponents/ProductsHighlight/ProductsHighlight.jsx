import React from 'react';
import './ProductsHighlight.css';

const ProductsHighlight = ({ heading, products, onViewAll }) => {
  return (
    <div className='container-fluid py-lg-5 py-sm-4 py-5'>
      <div className="container d-flex flex-column gap-lg-4 gap-sm-4 gap-4">
        
        {/* Heading from props */}
        <h1 className='text-center mainheadingProductsHighlight'>{heading}</h1>
        
        {/* Products list */}
        <div className="productsSection">
          <div className="row justify-content-center align-items-center gy-lg-0 gy-sm-5 gy-5">
            {products.map((item, index) => (
              <div className="col-lg-3 col-sm-6 col-12" key={index}>
                <div className='productContent d-flex flex-column align-items-lg-start align-items-sm-start  align-items-start gap-lg-1 gap-sm-1 gap-2'>
                  <div className="productImage">
                    <img src={item.image} alt={item.name} className='img-fluid'/>
                  </div>
                  <div className="productName">
                    <h6 className='m-0'>{item.name}</h6>
                    <h6 className='brandNameProduct'>{item.brand}</h6>
                  </div>
                  <div className="productRating d-flex align-items-center align-items-lg-center">
                    <span style={{ color: '#FFD700' }}>Rating:</span> 
                    <span className='productRating-Got ms-lg-2 ms-sm-2 m-2'>
                      {item.rating}/<span className='productRating-Outof'>5</span>
                    </span>
                  </div>
                  <div className="productPrice">
                    <h4 className='m-0'>Price: ${item.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className='d-flex flex-column justify-content-center align-items-center mt-md-4 mt-0 mt-3'>
          <button className='viewAllButton' onClick={onViewAll}>
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHighlight;
