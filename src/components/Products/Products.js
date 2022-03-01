import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  useState(productsData);

  return (
    <section>
      {productsData.map(product => <Product 
      key={product.id} 
      id={product.id}
      {...product} /> )}
    </section>
  );
};

export default Products;