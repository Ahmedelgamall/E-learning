import React from "react";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineRead } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Link from "next/link";

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
  const { id, name, image, brand, movement, price , description } = product;

  // Ensure the ID is available before rendering
  if (!id) {
    console.error("Product ID is undefined for product:", product);
    return null;
  }

  return (
    <div className="CourseCard">
      <Link href={`/product/${id}`} passHref>
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
        <h3 className="course-name">{name}</h3>
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

export default CourseCard;
