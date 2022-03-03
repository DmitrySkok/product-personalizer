import Button from '../Button/Button';
import OptionColor from '../Options/OptionColor';
import OptionSize from '../Options/OptionSize';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = props => {
  // console.log('ProductForm props: ', props);
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize
      sizes={props.sizes} 
      currentSize={props.currentSize} 
      setCurrentSize={props.setCurrentSize} 
      />
      <OptionColor 
      colors={props.colors} 
      prepareColorClassName={props.prepareColorClassName}
      currentColor={props.currentColor} 
      setCurrentColor={props.setCurrentColor}/>
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