import React, { useState } from 'react';
import './Products.css';
import { FaChevronDown } from "react-icons/fa";

// -------------------- IMPORT IMAGES --------------------
// Original Series
import originalImg1 from '../../assets/productDetailPage/Original/RemBG/img1.webp';
import originalImg2 from '../../assets/productDetailPage/Original/RemBG/img2.webp';
import originalImg3 from '../../assets/productDetailPage/Original/RemBG/img3.webp';
import originalImg4 from '../../assets/productDetailPage/Original/RemBG/img4.webp';
import originalImg5 from '../../assets/productDetailPage/Original/RemBG/img5.webp';
import originalImg6 from '../../assets/productDetailPage/Original/RemBG/img6.webp';
import originalImg7 from '../../assets/productDetailPage/Original/RemBG/img7.webp';
import originalImg8 from '../../assets/productDetailPage/Original/RemBG/img8.webp';

// Signature Series
import signatureImg1 from '../../assets/productDetailPage/SignatureSeries/RemBG/img1.webp';
import signatureImg2 from '../../assets/productDetailPage/SignatureSeries/RemBG/img2.webp';
import signatureImg3 from '../../assets/productDetailPage/SignatureSeries/RemBG/img3.webp';
import signatureImg4 from '../../assets/productDetailPage/SignatureSeries/RemBG/img4.webp';
import signatureImg5 from '../../assets/productDetailPage/SignatureSeries/RemBG/img5.webp';
import signatureImg6 from '../../assets/productDetailPage/SignatureSeries/RemBG/img6.webp';
import signatureImg7 from '../../assets/productDetailPage/SignatureSeries/RemBG/img7.webp';
import signatureImg8 from '../../assets/productDetailPage/SignatureSeries/RemBG/img8.webp';

// Jacket Series
import jacketImg1 from '../../assets/productDetailPage/JacketSeries/RemBG/img1.webp';
import jacketImg2 from '../../assets/productDetailPage/JacketSeries/RemBG/img2.webp';
import jacketImg3 from '../../assets/productDetailPage/JacketSeries/RemBG/img3.webp';
import jacketImg4 from '../../assets/productDetailPage/JacketSeries/RemBG/img4.webp';
import jacketImg5 from '../../assets/productDetailPage/JacketSeries/RemBG/img5.webp';
import jacketImg6 from '../../assets/productDetailPage/JacketSeries/RemBG/img6.webp';
import jacketImg7 from '../../assets/productDetailPage/JacketSeries/RemBG/img7.webp';

// -------------------- CATEGORY ARRAYS --------------------
const originalSeries = [
  { category: 'Original Series', name: 'Classic Cotton Polo', brand: 'Gucci', rating: 4.6, price: 110, newArrivalScore: 8, image: originalImg1 },
  { category: 'Original Series', name: 'Luxury Silk Scarf', brand: 'Gucci', rating: 4.7, price: 150, newArrivalScore: 6, image: originalImg2 },
  { category: 'Original Series', name: 'Winter Wool Sweater', brand: 'Gucci', rating: 4.8, price: 180, newArrivalScore: 9, image: originalImg3 },
  { category: 'Original Series', name: 'Tailored White Shirt', brand: 'Gucci', rating: 4.5, price: 160, newArrivalScore: 5, image: originalImg4 },
  { category: 'Original Series', name: 'Athletic Performance Tee', brand: 'Gucci', rating: 4.9, price: 130, newArrivalScore: 12, image: originalImg5 },
  { category: 'Original Series', name: 'Formal Office Shirt', brand: 'Gucci', rating: 4.6, price: 170, newArrivalScore: 4, image: originalImg6 },
  { category: 'Original Series', name: 'Slim Fit Track Pants', brand: 'Gucci', rating: 4.4, price: 100, newArrivalScore: 10, image: originalImg7 },
  { category: 'Original Series', name: 'Casual Summer Shorts', brand: 'Gucci', rating: 4.3, price: 95, newArrivalScore: 7, image: originalImg8 },
];

const signatureSeries = [
  { category: 'Signature Series', name: 'Signature Embroidered Hoodie', brand: 'Gucci', rating: 4.8, price: 210, newArrivalScore: 15, image: signatureImg1 },
  { category: 'Signature Series', name: 'Limited Edition Leather Cap', brand: 'Gucci', rating: 4.7, price: 140, newArrivalScore: 9, image: signatureImg2 },
  { category: 'Signature Series', name: 'Monogram Print Sweatshirt', brand: 'Gucci', rating: 4.9, price: 230, newArrivalScore: 14, image: signatureImg3 },
  { category: 'Signature Series', name: 'Classic Logo T-shirt', brand: 'Gucci', rating: 4.6, price: 120, newArrivalScore: 11, image: signatureImg4 },
  { category: 'Signature Series', name: 'Heritage Track Jacket', brand: 'Gucci', rating: 4.8, price: 260, newArrivalScore: 13, image: signatureImg5 },
  { category: 'Signature Series', name: 'Premium Cotton Beanie', brand: 'Gucci', rating: 4.5, price: 85, newArrivalScore: 6, image: signatureImg6 },
  { category: 'Signature Series', name: 'Designer Weekender Bag', brand: 'Gucci', rating: 4.9, price: 350, newArrivalScore: 16, image: signatureImg7 },
  { category: 'Signature Series', name: 'Modern Fit Denim Jacket', brand: 'Gucci', rating: 4.7, price: 280, newArrivalScore: 10, image: signatureImg8 },
];

const jacketSeries = [
  { category: 'Jacket Series', name: 'Classic Bomber Jacket', brand: 'Gucci', rating: 4.7, price: 300, newArrivalScore: 12, image: jacketImg1 },
  { category: 'Jacket Series', name: 'Suede Leather Jacket', brand: 'Gucci', rating: 4.9, price: 450, newArrivalScore: 18, image: jacketImg2 },
  { category: 'Jacket Series', name: 'Lightweight Windbreaker', brand: 'Gucci', rating: 4.6, price: 220, newArrivalScore: 8, image: jacketImg3 },
  { category: 'Jacket Series', name: 'Padded Winter Coat', brand: 'Gucci', rating: 4.8, price: 500, newArrivalScore: 20, image: jacketImg4 },
  { category: 'Jacket Series', name: 'Denim Trucker Jacket', brand: 'Gucci', rating: 4.5, price: 250, newArrivalScore: 10, image: jacketImg5 },
  { category: 'Jacket Series', name: 'Oversized Streetwear Jacket', brand: 'Gucci', rating: 4.4, price: 270, newArrivalScore: 7, image: jacketImg6 },
  { category: 'Jacket Series', name: 'Faux Fur Collar Jacket', brand: 'Gucci', rating: 4.6, price: 320, newArrivalScore: 9, image: jacketImg7 },
];

const allProducts = [...originalSeries, ...signatureSeries, ...jacketSeries];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [sortType, setSortType] = useState("Most Popular");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products based on category
  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter(p => p.category === activeCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "Price: Low to High") return a.price - b.price;
    if (sortType === "Price: High to Low") return b.price - a.price;
    if (sortType === "Rating") return b.rating - a.rating;
    if (sortType === "New Arrivals") return b.newArrivalScore - a.newArrivalScore;
    return 0;
  });

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // reset to first page when category changes
  };

  return (
    <div className='container-fluid my-lg-5 my-md-3 my-sm-3 my-3'>
      <div className="container">
        <div className='d-flex justify-content-between align-items-center mb-lg-4 mb-md-4 mb-4 mt-lg-0 mt-md-5 mt-sm-5 mt-5'>
          {/* Category Buttons Large Devices*/}
          <div className="categorySelector largerDevice d-flex">
            <button
              className={`categorySelectorBtnOne ${activeCategory === "All" ? "active" : ""}`}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </button>
            <button
              className={`categorySelectorBtnOne-Additional ${activeCategory === "Original Series" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Original Series")}
            >
              Original Series
            </button>
            <button
              className={`categorySelectorBtnTwo ${activeCategory === "Signature Series" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Signature Series")}
            >
              Signature Series
            </button>
            <button
              className={`categorySelectorBtnThree ${activeCategory === "Jacket Series" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Jacket Series")}
            >
              Jacket Series
            </button>
          </div>

          {/* Caregoy Buttons Smaller Device */}
            <div className="smallerDevice">
              <select
                className="form-select custom-form-select"
                value={activeCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Original Series">Original Series</option>
                <option value="Signature Series">Signature Series</option>
                <option value="Jacket Series">Jacket Series</option>
              </select>
            </div>

          {/* Sort Dropdown */}
          <div className='d-flex gap-lg-0 flex-lg-row flex-column gap-0 justify-content-end align-items-center flex-wrap'>
            <h6 className='paginationGuide m-0'>
              Showing {indexOfFirst + 1}-{Math.min(indexOfLast, filteredProducts.length)} of {filteredProducts.length} Products
            </h6>
            <div className="dropdown">
              <button
                className="btn sortByWordin d-flex align-items-center gap-sm-2 gap-3 m-0 p-0"
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
                  <div className="productName mb-lg-2 mb-md-2 ">
                    <h6 className='m-0'>{item.name}</h6>
                    <h6 className='brandNameProduct m-0'>{item.category}</h6>
                  </div>
                  <div className="productRating d-flex align-items-center">
                    <span >Rating</span>
                    <span className='productRating-Got ms-lg-2 ms-md-2 ms-3'>
                      {item.rating}/<span className='productRating-Outof'>5</span>
                    </span>
                  </div>
                  <div className="productPrice d-flex align-items-start">
                    <h4 className='m-0'>Price: <span>${item.price}</span></h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
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
