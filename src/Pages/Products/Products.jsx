import React, { useState } from 'react';
import './Products.css';

import newArrivalProductImg from '../../assets/homePage/newArrivalsItemWithoutBackground.png';
import { FaChevronDown } from "react-icons/fa";

const Products = () => {
  const allProducts = [
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, newArrivalScore: 8, image: newArrivalProductImg },
    { name: 'Hoodie with Print', brand: 'Gucci', rating: 4.8, price: 150, newArrivalScore: 12, image: newArrivalProductImg },
    { name: 'Casual Shirt', brand: 'Gucci', rating: 4.2, price: 90, newArrivalScore: 3, image: newArrivalProductImg },
    { name: 'Jeans', brand: 'Gucci', rating: 4.1, price: 200, newArrivalScore: 5, image: newArrivalProductImg },
    { name: 'Cap', brand: 'Gucci', rating: 4.0, price: 40, newArrivalScore: 9, image: newArrivalProductImg },
    { name: 'Sneakers', brand: 'Gucci', rating: 4.9, price: 250, newArrivalScore: 15, image: newArrivalProductImg },
    { name: 'Jacket', brand: 'Gucci', rating: 4.7, price: 300, newArrivalScore: 10, image: newArrivalProductImg },
    { name: 'Shorts', brand: 'Gucci', rating: 3.9, price: 70, newArrivalScore: 4, image: newArrivalProductImg },
    { name: 'Scarf', brand: 'Gucci', rating: 4.3, price: 50, newArrivalScore: 7, image: newArrivalProductImg },
    { name: 'Sweater', brand: 'Gucci', rating: 4.6, price: 180, newArrivalScore: 6, image: newArrivalProductImg },
    { name: 'Polo Shirt', brand: 'Gucci', rating: 4.4, price: 110, newArrivalScore: 2, image: newArrivalProductImg },
    { name: 'Sports T-shirt', brand: 'Gucci', rating: 4.8, price: 130, newArrivalScore: 11, image: newArrivalProductImg },
    { name: 'Formal Shirt', brand: 'Gucci', rating: 4.5, price: 160, newArrivalScore: 1, image: newArrivalProductImg },
    { name: 'Track Pants', brand: 'Gucci', rating: 4.2, price: 100, newArrivalScore: 14, image: newArrivalProductImg },
  ];

  // States
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [sortType, setSortType] = useState("Most Popular");

  // Sorting Logic
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortType === "Price: Low to High") return a.price - b.price;
    if (sortType === "Price: High to Low") return b.price - a.price;
    if (sortType === "Rating") return b.rating - a.rating;
    if (sortType === "New Arrivals") return b.newArrivalScore - a.newArrivalScore;
    return 0; // Most Popular (default order)
  });

  // Pagination Logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className='container-fluid my-lg-5 my-md-3 my-sm-3 my-3'>
      <div className="container">

        {/* Top Filters */}
        <div className='d-flex gap-lg-5 gap-md-3 gap-sm-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3 justify-content-end align-items-center flex-wrap'>
          <h6 className='paginationGuide m-0'>
            Showing {indexOfFirst + 1}-{Math.min(indexOfLast, allProducts.length)} of {allProducts.length} Products
          </h6>

          {/* Sort Dropdown */}
          <div className="dropdown">
            <button
              className="btn d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              Sort by: {sortType} <FaChevronDown />
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => setSortType("Most Popular")}>Most Popular</button></li>
              <li><button className="dropdown-item" onClick={() => setSortType("Price: Low to High")}>Price: Low to High</button></li>
              <li><button className="dropdown-item" onClick={() => setSortType("Price: High to Low")}>Price: High to Low</button></li>
              <li><button className="dropdown-item" onClick={() => setSortType("Rating")}>Rating</button></li>
              <li><button className="dropdown-item" onClick={() => setSortType("New Arrivals")}>New Arrivals</button></li>
            </ul>
          </div>
        </div>

        {/* Products Grid */}
        <div className="productsSection">
          <div className="row gy-lg-5 gy-md-5 gy-sm-5 gy-5">
            {currentProducts.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div className='productContent d-flex flex-column gap-lg-1 gap-md-1 gap-2'>
                  <div className="productImageAll">
                    <img src={item.image} alt={item.name} className='img-fluid' />
                  </div>
                  <div className="productName">
                    <h6 className='m-0'>{item.name}</h6>
                    <h6 className='brandNameProduct'>{item.brand}</h6>
                  </div>
                  <div className="productRating d-flex align-items-center">
                    <span style={{ color: '#FFD700' }}>★★★★★</span>
                    <span className='productRating-Got ms-lg-2 ms-md-2 ms-3'>
                      {item.rating}/<span className='productRating-Outof'>5</span>
                    </span>
                  </div>
                  <div className="productPrice">
                    <h4 className='m-0'>${item.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination gap-lg-1 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
};

export default Products;
