import React from 'react';
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useAxiosGet } from '../hooks/useAxiosGet';

export default function Home() {
  const url = `https://5f68da84dc0bff0016f43fbf.mockapi.io/api/v1/products?page=1&limit=10`;
  const {error, response} = useAxiosGet(url);

  if (error) {
    return (
      <div>{error}</div>
    );
  }

  return (
    <div>
    {response ?
        <div>
          <h1 className="font-bold text-2xl mb-3">
            Best Sellers
          </h1>
          {response.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
        :
        <Loader />
    }
    </div>
  );
}
