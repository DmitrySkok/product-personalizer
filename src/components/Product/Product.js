import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  console.log('Product props: ', props);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = price => {
    return price + props.sizes.find(({name}) => name === currentSize).additionalPrice + '$'
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.clear();
    console.log('Product summary');
    console.log('↓▬▬↓▬▬↓▬▬↓▬▬↓▬▬↓');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice(props.basePrice));
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice(props.basePrice)}</span>
        </header>
        <ProductForm
        colors={props.colors}
        sizes={props.sizes}
        handleSubmit={handleSubmit}
        prepareColorClassName={prepareColorClassName}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  )
};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.func
};

export default Product;