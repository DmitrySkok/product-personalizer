import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = props => {
  console.log('ProductImage props: ', props);
  return (
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  );
}

ProductImage.propTypes = {
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string
}

export default ProductImage;