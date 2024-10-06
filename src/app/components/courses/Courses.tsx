"use client";

import React, { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineRead } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import './Courses.scss';
import '../CourseCard/CourseCard.scss';
import Link from "next/link";
import { setLanguage } from '../../redux/languageSlice';
import { useTranslation } from 'react-i18next';

// interface Product {
//   id: number;
//   product_name: string;
//   image: string;
//   description: string;
//   Brand: string;
//   movement: string;
//   price: number;
// }


interface Product {
  id: number;
  name: string; // Update this field
  image: string;
  description: string;
  brand: string; // Update this field
  movement: string;
  price: number;
}


const CourseCard: React.FC<{ product: Product }> = ({ product }) => {
  // const { t } = useTranslation();

  const {name , image, brand, movement, price , id , description } = product;
  // console.log(product);
  // console.log('Product ID:', id); 
  return (
    <div className="CourseCard">
        <Link className="link" href={`/product/${id}`} passHref>
        <img src={image} alt={name} />
        <div className="course-author">
          <div className="instructor">
            <img src={image} alt={name} />
            <div className="instructor-name">{brand}</div>
          </div>
          <div className="course-category">
            {movement}
          </div>
        </div>


        <h3 className="course-name">{description}</h3>
        <h3 className="course-name">id: {id}</h3>
        <div className="course-nums">
          <div className="instructor">
            <div className="instructor-name">
              <h5 className="lec-num">
                <MdOutlineAccessTime className="icon" /> <span>7 hours 42 mins</span>
              </h5>
            </div>
          </div>
          <h5 className="lec-num"><AiOutlineRead className="icon" /> <span>34</span></h5>
        </div>
        <div className="courses-price-review">
          <div className="price">$ {price}</div>  
          <div className="review">
            4.8 <FaStar className="starIcon" /> <FaStar className="starIcon" /> 
            <FaStar className="starIcon" /> <FaStarHalfAlt className="starIcon" />
          </div>
        </div>
      </Link>
    </div>
  );
};

const Courses: React.FC = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    fetch('https://project.mallahsoft.com/public/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        if (json && Array.isArray(json.data)) {
          setProducts(json.data);
        }
        setLoading(false);
      })
      .catch(error => {
        // console.error('Error fetching products:', error);
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product => 
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'all' || product.movement.toLowerCase() === activeTab.toLowerCase())
  );
  // console.log('Product in Courses:', products);
  

  const categories = ['all', 'Programming', 'Design', 'Business'];

  return (
    <div id="courses" className="all-courses">
      <div className="container">
        <div className="header">
          <div className="row">
            <div className="col-md-6 col-12">
              <h2>{t('courses.head-title')} <span>E-study</span></h2>
            </div>
            <div className="col-md-6 col-12">
              <div className="courses-search">
                <form action="#" onSubmit={e => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder={t('courses.head-search')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button><FaSearch className="icon" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`tab ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="Cards">
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="col-lg-4 col-md-6 col-12">
                  <CourseCard product={product} />
                </div>
              ))
            ) : (
              <p className="no-found">No courses found...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
