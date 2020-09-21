import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader";
import { useAxiosGet } from '../hooks/useAxiosGet';

export default function Product() {
  const { id } = useParams();
  const url = `https://5f68da84dc0bff0016f43fbf.mockapi.io/api/v1/products/${id}`;
  const { error, response } = useAxiosGet(url);

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
            {response.name}
          </h1>
          <div>
            <img
              src={response.images[0].image}
              alt={response.name}
            />
          </div>
          <div className="font-bold text-xl mb-3">
            $ {response.price}
          </div>
          <div>
            {response.description}
          </div>
        </div>
        :
        <Loader />
      }
    </div>
  );
}
