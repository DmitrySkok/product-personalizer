import Button from '../Button/Button';
import OptionColor from '../Options/OptionColor';
import OptionSize from '../Options/OptionSize';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize 
      currentSize={props.currentSize} 
      setCurrentSize={props.setCurrentSize} 
      sizes={props.sizes} />
      <OptionColor 
      colors={props.colors} 
      prepareColorClassName={props.prepareColorClassName} 
      currentColor={props.currentColor} 
      setCurrentSize={props.setCurrentSize}/>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default ProductForm;