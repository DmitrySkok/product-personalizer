import styles from './Options.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
  // console.log('OptionSize props: ', props);
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => 
          <li key={size.name}>
            <button 
            type="button" 
            className={clsx(size.name === props.currentSize && styles.active)} 
            onClick={() => props.setCurrentSize(size.name)}>{size.name}</button>
          </li>)}
      </ul>
    </div>
  );
}

OptionSize.propTypes = {
  currentSize: PropTypes.string,
  setCurrentSize: PropTypes.func
}

export default OptionSize;