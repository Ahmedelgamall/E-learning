"use client";

import { useEffect, useState } from 'react';

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

const ProductDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch product details dynamically by ID
      fetch(`https://project.mallahsoft.com/public/api/products/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          return response.json();
        })
        .then((json) => {
          setProduct(json.data); // Assuming API response structure has `data`
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          setError('Error fetching product details');
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Movement: {product.movement}</p>
          <p>Price: $ {product.price}</p>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default ProductDetail;
