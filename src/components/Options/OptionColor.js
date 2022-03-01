import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const OptionColor = (props) => {
  console.log('OptionColor props: ', props);
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
      {props.colors.map(color =>
        <li key={color}>
          <button 
          type="button" 
          className={clsx(props.prepareColorClassName(color), color === props.currentColor && styles.active)} 
          onClick={() => props.setCurrentColor(color)} />
        </li>
      )}
      </ul>
    </div>
  );
}

OptionColor.propTypes = {
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
  prepareColorClassName: PropTypes.func
}

export default OptionColor;